const express = require('express');
const axios = require('axios');
const router = express.Router();
const { getToken } = require('../getToken');

const getPetFinderInstance = async () => {
  const token = await getToken();
  const axiosInstance = await axios.create({
    baseURL: 'https://api.petfinder.com/v2',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
  });
  return axiosInstance;
};

router.get('/', async (req, res) => {
  try {
    let axiosInstance = await getPetFinderInstance();
    let query = axiosInstance.get('/animals');
    const { q } = req.query;
    if (q) {
      query = axiosInstance.get(`/animals?type=${q}`);
    }
    const response = await query;
    const pets = response.data;
    res.json(pets);
  } catch (err) {
    // Handle other errors
    console.error('Error fetching pets:', err.message, err.stack);
    res.status(500).json({ message: 'Error fetching pets' });
  }
});

module.exports = router;