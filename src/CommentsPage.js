import React, { useState, useEffect } from 'react';

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  // Fetch comments from the backend when the component is mounted
  useEffect(() => {
    async function fetchComments() {
      const response = await fetch('http://localhost:5000/comments');
      const data = await response.json();
      setComments(data);
    }
    
    fetchComments();
  }, []);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!comment.trim()) {
      setStatusMessage('Please enter a valid comment.');
      return;
    }

    try {
      // Make a POST request to add the comment
      const response = await fetch('http://localhost:5000/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment }),
      });

      const data = await response.json();
      if (response.status === 201) {
        setStatusMessage('Comment added successfully!');
        setComment('');
        // Re-fetch comments to show the new one
        const newComments = await fetch('http://localhost:5000/comments');
        setComments(await newComments.json());
      } else {
        setStatusMessage(data.message || 'Something went wrong');
      }
    } catch (error) {
      setStatusMessage('Error adding comment: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Comments</h1>
      <div id="comments-list">
        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        )}
      </div>
      <div id="add-comment-section">
        <h2>Add Comment</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            id="comment-text"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Enter your comment..."
          />
          <button type="submit">Submit</button>
        </form>
        <div id="form-status">{statusMessage}</div>
      </div>
    </div>
  );
}

export default CommentsPage;
