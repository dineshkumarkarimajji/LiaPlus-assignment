const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://karimajjidineshkumar:e7uz2f7ICXQW2AfJ@cluster0.taufkri.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// Feedback Schema
const feedbackSchema = new mongoose.Schema({
  username: String,
  email: String,
  feedback: String,
  category: String, // optional
  timestamp: { type: Date, default: Date.now },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

// POST /feedback
app.post('/feedback', async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).send('Feedback submitted successfully!');
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET /feedback
app.get('/feedback', async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
