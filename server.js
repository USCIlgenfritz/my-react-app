const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Temporary in-memory store for comments
let comments = [];

// Route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Route to add a new comment
app.post('/comments', (req, res) => {
  const { comment } = req.body;

  if (!comment || comment.trim() === '') {
    return res.status(400).json({ message: 'Comment is required' });
  }

  comments.push(comment);  // Add the comment to the array
  res.status(201).json({ message: 'Comment added successfully!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
