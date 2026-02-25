const express = require('express');
const axios = require('axios');
const app = express();

const BACKEND_URL = "http://localhost:5000/api";

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(BACKEND_URL);
    res.send(`
      <h1>Frontend Server</h1>
      <p>${response.data.message}</p>
    `);
  } catch (error) {
    res.send("Error connecting to backend");
  }
});

app.listen(80, () => {
  console.log('Frontend running on port 3000');
});