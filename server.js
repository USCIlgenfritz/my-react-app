const express = require('express');
const mongoose = require('mongoose'); // Import Mongoose
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mongoose Connection
mongoose.connect('your_mongodb_connection_string', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

// Define Schema and Model
const commentSchema = new mongoose.Schema({
  comment: { type: String, required: true }, // Make comment required
});

const Comments = mongoose.model('Comments', commentSchema);

// Routes

// Get all comments
app.get('/comments', async (req, res) => {
  try {
    const comments = await Comments.find(); // Fetch all comments from MongoDB
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch comments', error: err });
  }
});

// Add a new comment
app.post('/comments', async (req, res) => {
  const { comment } = req.body;
  if (!comment) {
    return res.status(400).json({ message: 'Comment is required' });
  }

  try {
    const newComment = new Comments({ comment }); // Create a new comment
    await newComment.save(); // Save to MongoDB
    res.status(201).json({ message: 'Comment added successfully', newComment });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add comment', error: err });
  }
});

// Edit an existing comment
app.put('/comments/:id', async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;

  if (!comment) {
    return res.status(400).json({ message: 'Comment is required' });
  }

  try {
    const updatedComment = await Comments.findByIdAndUpdate(
      id,
      { comment },
      { new: true } // Return the updated document
    );
    if (!updatedComment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(200).json({ message: 'Comment updated successfully', updatedComment });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update comment', error: err });
  }
});

// Delete a comment
app.delete('/comments/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedComment = await Comments.findByIdAndDelete(id);
    if (!deletedComment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(200).json({ message: 'Comment deleted successfully', deletedComment });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete comment', error: err });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
