const express = require('express');
const axios = require('axios');
const router = express.Router();

const axiosInstance = axios.create({
  baseURL: 'https://api.petfinder.com/v2/',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJFOWQwUTZHTGVUdkFrYW5rZHREeGNLYlQxQWllTFFWVVJtY3lHVDJoUEo0QTYwNWU3TSIsImp0aSI6ImVhNmU2YjBiMzNmZjE2MDEzMzJhOGM2ZTc4NDk3YzQ5YTc1MmZlZmI0MjFhNjgwMWE0NmNkYjUxNzAwYmE2ZTRhNmQzYmYwZmMxNTNmZTQxIiwiaWF0IjoxNjk2Mjg5ODk5LCJuYmYiOjE2OTYyODk4OTksImV4cCI6MTY5NjI5MzQ5OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.P9WwYdfgXjvOIxIdTA1NlX6__wyyzTbRUbH6-0cYtO9WaJr0ml-Hvuh4zW7UXTQ9tu2tMVjUanHbGEfqI0Nz8VDTJ02kK_I28Y6fALjKS_ytzXeifqRr8foGaVzdHkJBJcGXrfors3pK7poReAekoHG1QtPIROWK0jl9FIBQUy_XWJ5r-A5Yp7vsyK1YBdYNOKcAwbsSSH6I5jQQexKNoYCm1sG1BIUeHji7oj2SG9EHDKZA4Fn8MF8SfOYVAZOJ78EkCfPi0UOhJBf8AFhM1fDnSN4IQF1p_h3UzTUmZxrYxqxDfGLs8i7rKG55dldSD3T-_q4hlix2W-I9tXKOQQ' }
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

