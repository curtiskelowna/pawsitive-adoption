const express = require('express');
const axios = require('axios');
const router = express.Router();

const axiosInstance = axios.create({
  baseURL: 'https://api.petfinder.com/v2/',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJFOWQwUTZHTGVUdkFrYW5rZHREeGNLYlQxQWllTFFWVVJtY3lHVDJoUEo0QTYwNWU3TSIsImp0aSI6ImYyOGY2N2JjM2YxYmViNzk5MzA3NTA3YzliNzEwNTU2ZTkxNzkwN2EwMGE1N2Y5M2NlMDhiOWFmZDdmNGM4MjA1YjlkYjQ5Zjg4YzU0YWEyIiwiaWF0IjoxNjk2NDQyNjQ4LCJuYmYiOjE2OTY0NDI2NDgsImV4cCI6MTY5NjQ0NjI0OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.q7jBupQ0WzAaR-_wTfQENd4vSkoYcu_rHX3YTQCIREffzHbJqvqBdBLOIgByUyoqrnnJJ6XKIRAo5c8alx7ltdTIOh6avk4oF1fcSBiiid6sCz2I9MdnuSm-D9qSvUjrS5yCKs5BXEz3mByRuFMb6vXdpXFVLux8FUYqJxQvFXaVcUnRlbUT1uafyYosSBuuS8d0RSN6ukxVK3lKHT70mm_xSnlApWzpCaDeVt1Ih54tgVQcVqnmKoW_VoogIHCM3uyv_pwVo4Pw4gZoh81hh1cTztw5lXDJC2ovU0hKwnApULaLDf2e4XsB6jYnm1DU3anAitADi9_rbO-Bd5ACRQ' }
});

router.get('/', async (req, res) => {
  try {
    const response = await axiosInstance.get('animals');
    const pets = response.data;
    console.log(response.data)
    res.json(pets);
  } catch(err) {
    console.error(`Error: ${err}`);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

