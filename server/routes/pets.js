const express = require('express');
const axios = require('axios');
const router = express.Router();

const axiosInstance = axios.create({
  baseURL: 'https://api.petfinder.com/v2/',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJFOWQwUTZHTGVUdkFrYW5rZHREeGNLYlQxQWllTFFWVVJtY3lHVDJoUEo0QTYwNWU3TSIsImp0aSI6IjJkNjMzMzliNWQwNDk1NjVmMjIyMGQ2NzFmOTQ0M2U1YzFjMDY3MDNiNDc1Yjg4ZTZiZGJhODUzMTc3ZmFkZDUzMjU5Nzk4YzQ3NzA4MDQ2IiwiaWF0IjoxNjk2MjY0OTczLCJuYmYiOjE2OTYyNjQ5NzMsImV4cCI6MTY5NjI2ODU3Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.qbz941bhDPZr3UdG-YaJf25o1g3YhEV4WTRJ5V-yIqSZOsgEPkL33N1A2C8mErqZ_1O-_VzVL9e2WPw2m1aqftA1njNyNJAPXqIOe6CGvg4f8c6xMUvz5nM6r3_i6EKr_XZ22DU21rXi8oDdVhHS0aciUoynY-jor8ZMtJabWP5XXGWjbNm8IvEaRyEDTr8jaQeVcKVwtnezwmYA9CGXFhMk6_W0uq8Pcglh3lN92IhTJf2DMiJvPmzmwW4m8nQWgJQmuFbjtvaPqfl9iMs7lG62Ey32Sy0K5z0bwli7CIaYZcuiNGoj6g9DwWtjcSLA93gNpUDDu-v5kkLEJlrSUA' }
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

