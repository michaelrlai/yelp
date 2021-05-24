require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.json());

// Get all restaurants
app.get('/api/v1/restaurants', (req, res) => {
  console.log('route handler ran');
  res.status(200).json({
    status: 'success',
    data: {
      restaurant: ['mcdonalds', 'wendys'],
    },
  });
});

// Get one restaurant
app.get('/api/v1/restaurants/:id', (req, res) => {
  console.log(req.params);
  res.status(200).json({
    status: 'success',
    data: {
      restaurant: 'mcdonalds',
    },
  });
});

// Create a restaurant
app.post('/api/v1/restaurants', (req, res) => {
  console.log(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      restaurant: 'mcdonalds',
    },
  });
});

// Update restaurants
app.put('/api/v1/restaurants/:id', (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(200).json({
    status: 'success',
    data: {
      restaurant: 'mcdonalds',
    },
  });
});

// Delete restaurants
app.delete('/api/v1/restaurants/:id', (req, res) => {
  res.status(204).json({
    status: 'success',
  });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});