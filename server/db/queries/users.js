const db = require('../../configs/db.config');
const bcrypt = require('bcrypt');

// Function to create a new user
const saltRounds = 10;

const createUser = async (fullname, email, password) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  const query = 'INSERT INTO users (fullname, email, password) VALUES ($1, $2, $3) RETURNING id, email, fullname';

  try {
    const result = await db.query(query, [fullname, email, hashedPassword]);
    return result.rows[0];
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Error creating user');
  }
};

// Function to get a user by email
const getUserByEmail = async (email, password) => {
  const query = 'SELECT * FROM users WHERE email = $1';
  try {
    const result = await db.query(query, [email]);
    const user = result.rows[0];

    if (!user) {
      return null; // User not found
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      return user; // Password matches
    } else {
      return null; // Password does not match
    }
  } catch (error) {
    console.error('Error fetching user by email:', error);
    throw new Error('Error fetching user by email');
  }
};

// Function to get a user's full name by ID
const getUserFullNameById = async (userId) => {
  const query = 'SELECT fullName FROM users WHERE id = $1';
  try {
    const result = await db.query(query, [userId]);
    return result.rows[0];
  } catch (error) {
    console.error('Error fetching user full name by ID:', error);
    throw new Error('Error fetching user full name by ID');
  }
};

module.exports = { createUser, getUserByEmail, getUserFullNameById };
