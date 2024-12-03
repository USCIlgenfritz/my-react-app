const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');



let comments = [
  { id: 1, comment: 'This is a comment' },
  { id: 2, comment: 'This is another comment' },
  { id: 3, comment: 'This is a third comment' },
];

app.use(cors());
app.use(bodyParser.json());

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Add a new comment
app.post('/comments', (req, res) => {
  const { comment } = req.body;
  if (!comment) {
    return res.status(400).json({ message: 'Comment is required' });
  }
  const newComment = { id: comments.length + 1, comment };
  comments.push(newComment);
  res.status(201).json({ message: 'Comment added successfully', newComment });
});

// Edit an existing comment
app.put('/comments/:id', (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;
  const commentIndex = comments.findIndex(c => c.id === parseInt(id));

  if (commentIndex === -1) {
    return res.status(404).json({ message: 'Comment not found' });
  }

  comments[commentIndex].comment = comment;
  res.status(200).json({ message: 'Comment updated successfully' });
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  const commentIndex = comments.findIndex(c => c.id === parseInt(id));

  if (commentIndex === -1) {
    return res.status(404).json({ message: 'Comment not found' });
  }

  comments.splice(commentIndex, 1);
  res.status(200).json({ message: 'Comment deleted successfully' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
