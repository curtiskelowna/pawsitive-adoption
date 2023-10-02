const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors'); // cors require

const usersRouter = require('./routes/users');
const petsRoutes = require('./routes/pets');

const app = express();
app.use(cors()) // CORS middleware useage

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/pets', petsRoutes);

module.exports = app;
