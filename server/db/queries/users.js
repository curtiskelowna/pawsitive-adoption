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
const getUserByEmail = async (email) => {
  const query = 'SELECT * FROM users WHERE email = $1';
  try {
    const result = await db.query(query, [email]);
    const user = result.rows[0];

    if (!user) {
      return null; // User not found
    }

    return user;
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

// Function to get a user by ID
const getUserById = async (userId) => {
  const query = 'SELECT * FROM users WHERE id = $1';
  try {
    const result = await db.query(query, [userId]);
    return result.rows[0];
  } catch (error) {
    console.error('Error fetching user full name by ID:', error);
    throw new Error('Error fetching user full name by ID');
  }
};

async function updateUser(userId, userData) {
  // connect to your database
  console.log('updateUser');
  // build your update statement
  let updateUserSql = `UPDATE users SET `;

  Object.keys(userData).forEach((key, index, array) => {
    updateUserSql += `${key} = '${userData[key]}'`;
    if (index !== array.length - 1) {
      updateUserSql += `, `;
    }
  });

  updateUserSql += ` WHERE id = ${userId} RETURNING *;`;
  console.log(updateUserSql);
  // execute the update statement
  const updatedUser = await db.query(updateUserSql);
  return updatedUser;
}

module.exports = { createUser, getUserByEmail, getUserFullNameById, updateUser, getUserById };
