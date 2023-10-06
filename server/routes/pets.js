const express = require('express');
const axios = require('axios');
const router = express.Router();
const token = process.env.REACT_APP_TOKEN;

const axiosInstance = axios.create({
  baseURL: 'https://api.petfinder.com/v2/',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
});

router.get('/', async (req, res) => {
  try {
    const response = await axiosInstance.get('animals?page=1');
    const pets = response.data;
    console.log(response.data)
    res.json(pets);
  } catch(err) {
    console.error(`Error: ${err}`);
    res.status(500).json({ message: err.message });
  }
});

router.post('/:id/favorite', (req, res)=>{
  const { id } = req.params;
  const userId = 1; // You may replace this with the actual user ID

  // Check if the pet ID is already in the favorites array
  const index = favoritePets.findIndex((petId) => petId === id);

  if (index === -1) {
    // If not found, add it to favorites
    favoritePets.push(id);
  } else {
    // If found, remove it from favorites
    favoritePets.splice(index, 1);
  }

  // You can also store the favoritePets array in a database

  // Respond with the updated list of favorite pet IDs
  res.json(favoritePets);
});

module.exports = router;

