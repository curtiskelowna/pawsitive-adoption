const express = require('express');
const axios = require('axios');
const router = express.Router();

const axiosInstance = axios.create({
  baseURL: 'https://api.petfinder.com/v2/',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJFOWQwUTZHTGVUdkFrYW5rZHREeGNLYlQxQWllTFFWVVJtY3lHVDJoUEo0QTYwNWU3TSIsImp0aSI6ImEwNDVjMjQ2OTBmMzU3YjI0MzJlODEyYWVkNzkxNTU2NTljOTQ2ODgyNDliYjMxYmE0NDJiODk2ODFiYjgzNzI4YjZmMDY5MmE5MWMzNjMwIiwiaWF0IjoxNjk2Mjg3MTc0LCJuYmYiOjE2OTYyODcxNzQsImV4cCI6MTY5NjI5MDc3NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.DYvzhZXYpnMEP1FqXM6k0v3nGA0K4HTmpes7nGMXQ0jY-ySuLQl-21RI6LmQUT3pwra1GlCPWJ89sWzoOxwKSAx9I_eJagZr4Pyt3BfIjYrC3PKKPY8iyNjb8vDxknQrMqJE6GpR48yr5P35-KrkS6Y0o9S_X3Vck342OrzzKs63NmVEBa06l1Z17Fy-xrmI3wKHleZG80bU5xyH0HF50xrU4rbFzt5MQH6nUA9BPcgP-65wFZxgm2tcVAMinBaTM64EfjhTqf5ZLmxdm593Qst8f5Y7oArfVG3K_JPMcem7GXtO9ujS6dXMdSUG-MvHwbfrUeDWx06h-MT1erc3bA' }
});

router.get('/', async (req, res) => {
  try {
    const response = await axiosInstance.get('animals');
    const pets = response.data; // adjust this to the structure of your response
    console.log(response.data)
    res.json(pets);
  } catch(err) {
    console.error(`Error: ${err}`);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

