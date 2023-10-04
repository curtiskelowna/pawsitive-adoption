const express = require('express');
const axios = require('axios');
const router = express.Router();

const axiosInstance = axios.create({
  baseURL: 'https://api.petfinder.com/v2/',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJFOWQwUTZHTGVUdkFrYW5rZHREeGNLYlQxQWllTFFWVVJtY3lHVDJoUEo0QTYwNWU3TSIsImp0aSI6ImY3YmRhOGZlY2MwMjY0NjlkMTZkMDZiMjNjZWRmY2ZiY2Y1NTQ0ODU0Nzk3YzBiNTlmZmE2NDY3ZWZkMzdhZTdiODE5NGI3NjU4ZDkzYzc4IiwiaWF0IjoxNjk2NDM2NDkzLCJuYmYiOjE2OTY0MzY0OTMsImV4cCI6MTY5NjQ0MDA5Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.pfuFBWD5mnsll63uNwYiOprMh4a_mGzl0ZFWATZn4cxSNFYiHi7oYTFmZJk2hA0pY_K8O7YwvWTF2GKwhCUERWWXdz7OSsmSGkIkuJhQCR0L5eA1pIR3zVB1zuQblexYPpal5Kk8fUtT_y2aV58XMkJPQsQ4pOljEHG_N4Xp-M-NmcPOkkfNAbt8yT3YVeJZmKQcLe8fZjPyaZwF1DZnRnN6izQ2l1RlQZOHv2Lmz8St7UP_6MjRNL6fJJEFMFO1FiDAekEtvvtAkEVdbfnNxCWy_V1Esj28lYyqHmgAHkNInXDTdUAsYbcYTuskmLaYQxLJ-IbrE7RuRbMaIYj82A' }
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

