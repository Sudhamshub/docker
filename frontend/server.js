const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

// Parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Proxy POST requests to backend
app.post('/submit', async (req, res) => {
  try {
    const response = await axios.post('http://backend:5000/submit', req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).send("Backend error: " + err.message);
  }
});

// Serve form.html for root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

app.listen(3000, () => console.log("Frontend running on 3000"));
