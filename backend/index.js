// index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const chatRoutes = require('./routes/chatRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Debug logs
console.log(" Before route mount");
app.use('/api/chat', chatRoutes);
console.log(" Routes mounted");

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/chatbot')
  .then(() => console.log(" MongoDB connected"))
  .catch(err => console.error("MongoDB error:", err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
