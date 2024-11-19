import React from 'react';
import CommentsPage from './CommentsPage'; // Import the CommentsPage component

const App = () => {
  return (
    <div className="App">
      <h1>RaceWay News - F1 Season Comments</h1>
      <CommentsPage /> {/* Render CommentsPage */}
    </div>
  );
};

export default App;
