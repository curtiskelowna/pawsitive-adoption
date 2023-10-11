// routes/users.js
const express = require('express');
const router = express.Router();
const users = require('../db/queries/users');
const { getUserFullNameById } = require('../db/queries/users');

/* GET users listing. */
router.get('/', (req, res) => {
  console.log("error");
  users.getAllUsers().then(data => {
    console.log(data);
    res.json({ users: data });
  });
});

// Route to get the user's full name by ID
router.get('/getUserFullName/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log(`Received request for user: ${userId}`);
    const user = await getUserFullNameById(userId);
    console.log(`User full name: ${user.fullName}`);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ fullName: user.fullName });
  } catch (error) {
    console.error('Error fetching user full name by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to update user data
router.put('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const { fullName, animalPreference, adoptionStatus } = req.body;

    const query = `
      UPDATE users
      SET
        fullName = $1,
        animalPreference = $2,
        adoptionStatus = $3
      WHERE
        id = $4
    `;

    await db.query(query, [fullName, animalPreference, adoptionStatus, userId]);

    res.status(204).send();
  } catch (error) {
    console.error('Error updating user data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;