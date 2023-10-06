const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const pool = require('./configs/db.config');
const { createUser, getUserByEmail } = require('./db/queries/users');
const axios = require('axios');
const { getToken } = require('./getToken');

require('dotenv').config();

const secretKey = process.env.JWT_SECRET_KEY;

const usersRouter = require('./routes/users');
const petsRoutes = require('./routes/pets');

const app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/pets', petsRoutes);

// Registration route
app.post('/signup', async (req, res) => {
  const { fullName: fullname, email, password } = req.body;

  try {
    // Check if the email is already registered
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Create a new user
    const newUser = await createUser(fullname, email, password);

    // Create a JWT token for the new user
    const token = jwt.sign({ ...newUser }, secretKey);

    res.status(201).json({ token, userId: newUser.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(401).json({ loggedIn: false, message: 'Authentication failed' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = jwt.sign({ ...user }, secretKey);
      res.json({ token });
    } else {
      res.status(401).json({ loggedIn: false, message: 'Authentication failed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ loggedIn: false, message: 'Internal server error' });
  }
});

app.use((req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return next();
  }
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return next(err);
    }
    req.user = decoded;
    next();
  });
});

// API endpoint to get the access token
app.get('/api/getToken', async (req, res) => {
  try {
    const token = await getToken();
    res.json({ access_token: token });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve access token' });
  }
});

module.exports = app;
