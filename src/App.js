import React, { useState } from 'react';
import PostItForm from './components/PostItForm';
import PostIt from './components/PostIt';

// src/App.js
import './App.css'; // Asegúrate de tener un archivo CSS para estilos

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div className="app-container">
       <center><h1>Post It Virtuales</h1></center>
      <PostItForm onAdd={addNote} />
      <div className="postit-grid">
        {notes.map((note, index) => (
          <PostIt key={index} note={note} onDelete={() => deleteNote(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
