const express = require('express');
const axios = require('axios');
const router = express.Router();

const axiosInstance = axios.create({
  baseURL: 'https://api.petfinder.com/v2/',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJFOWQwUTZHTGVUdkFrYW5rZHREeGNLYlQxQWllTFFWVVJtY3lHVDJoUEo0QTYwNWU3TSIsImp0aSI6IjMxZDcxYzI4YWYzOWVjNWY2YTg4NzJmYjczMGZiOTA2NTY5YjQxZDMzMjFmMjA3OGJmYTlkNTg5NzlmZWIyYTI4ODY1Njg5ZjQ5NGIzYjEwIiwiaWF0IjoxNjk2MTAxNTE3LCJuYmYiOjE2OTYxMDE1MTcsImV4cCI6MTY5NjEwNTExNywic3ViIjoiIiwic2NvcGVzIjpbXX0.To0SkBwhjvnqgcM4RIXwX957GkVWTP-zJoRGThi2zif8-5G46L2ObW6dYCATvQoUYuKSyVr3jsUpxc_oHTluVLm78S9vP7EAHtEn4q5N3lCDumUR4AiVY6vmiLJcT_f-21pyk0gM--1QRv_vnZbk1nUBt-E3ZPr4z3VogApUtKhLta2m6GPN5DLRgMaUYjfgp_tacTZXFsgelZH6ilqBVmEXymYb_cCX008pdjxKFi0zo4K-jjdgyV7OhjDrA_gvkJs3oDweaZmbsAKuSZ1dpTPPtE-5GhlQh1D9BZRimohI3T95hf3Pb2Zf_I4oq_UZdxJxh55IRs_aLC4R84JVgA' }
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

