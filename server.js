const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON bodies

// Route to handle form submissions
app.post('/submit-form', (req, res) => {
  const { name, email, phone, address } = req.body;

  console.log('Form Data Received:', { name, email, phone, address });

  // Here you could save the data to a database or perform other actions

  res.status(200).json({ message: 'Form submitted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
