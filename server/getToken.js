const axios = require('axios');

// Function to retrieve the access token
const getToken = async () => {
  const apiKey = process.env.PETFINDER_PUBLISHABLE_API;
  const apiSecret = process.env.PETFINDER_SECRET_API;

  try {
    const response = await axios.post('https://api.petfinder.com/v2/oauth2/token', {
      grant_type: 'client_credentials',
      client_id: apiKey,
      client_secret: apiSecret,
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error retrieving token:', error);
    throw error;
  }
};

module.exports = { getToken };