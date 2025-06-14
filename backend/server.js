const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const messageRoutes = require('./routes/messageRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: 'https://portfolio-frontend-kmoh.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Portfolio API is running');
});

const PORT = 5000; // Fixed port number

// Start server first
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Environment:', process.env.NODE_ENV);
});

// Then try to connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB Connected');
  // Only set up routes after MongoDB is connected
  app.use('/api/messages', messageRoutes);
})
.catch((err) => {
  console.log('MongoDB Connection Error:', err);
  console.log('Server will continue running without database functionality');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
}); 