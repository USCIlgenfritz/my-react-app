import React, { useState, useEffect } from 'react';

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editComment, setEditComment] = useState('');
  const [editId, setEditId] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  // Fetch comments from server
  useEffect(() => {
    fetch('http://localhost:5000/comments')
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error(err));
  }, []);

  // Handle new comment submission
  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) {
      setStatusMessage('Comment is required.');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment: newComment }),
      });

      const data = await res.json();
      if (res.status === 201) {
        setComments([...comments, data.newComment]);
        setNewComment('');
        setStatusMessage(data.message);
      } else {
        setStatusMessage(data.message || 'Failed to add comment.');
      }
    } catch (err) {
      setStatusMessage('Error adding comment: ' + err.message);
    }
  };

  // Handle editing a comment
  const handleEditComment = async (e) => {
    e.preventDefault();
    if (!editComment.trim()) {
      setStatusMessage('Edited comment is required.');
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/comments/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment: editComment }),
      });

      const data = await res.json();
      if (res.status === 200) {
        setComments(
          comments.map((c) =>
            c.id === editId ? { ...c, comment: editComment } : c
          )
        );
        setEditComment('');
        setEditId(null);
        setStatusMessage(data.message);
      } else {
        setStatusMessage(data.message || 'Failed to edit comment.');
      }
    } catch (err) {
      setStatusMessage('Error editing comment: ' + err.message);
    }
  };

  // Handle deleting a comment
  const handleDeleteComment = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/comments/${id}`, {
        method: 'DELETE',
      });

      const data = await res.json();
      if (res.status === 200) {
        setComments(comments.filter((c) => c.id !== id));
        setStatusMessage(data.message);
      } else {
        setStatusMessage(data.message || 'Failed to delete comment.');
      }
    } catch (err) {
      setStatusMessage('Error deleting comment: ' + err.message);
    }
  };

  return (
    <div>
      <h1>Comments</h1>
      <ul id="comments-list">
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <button onClick={() => { setEditId(comment.id); setEditComment(comment.comment); }}>Edit</button>
            <button onClick={() => handleDeleteComment(comment.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {editId ? (
        <form onSubmit={handleEditComment}>
          <textarea
            value={editComment}
            onChange={(e) => setEditComment(e.target.value)}
          />
          <button type="submit">Update Comment</button>
        </form>
      ) : (
        <form onSubmit={handleAddComment}>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Enter your comment..."
          />
          <button type="submit">Add Comment</button>
        </form>
      )}

      <p>{statusMessage}</p>
    </div>
  );
}

export default CommentsPage;
