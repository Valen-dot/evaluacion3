// src/components/PostIt.jsx
import React from 'react';
import './PostIt.css';

function PostIt({ note, onDelete }) {
  const style = {
    backgroundColor: note.isImportant ? '#EC7063' : '#FFFFCC',
  };

  return (
    <div className="postit" style={style}>
      <button className="delete-btn" onClick={onDelete}>X</button>
      <h3>{note.title}</h3>
      <p>{note.description}</p>
    </div>
  );
}

export default PostIt;