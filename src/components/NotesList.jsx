import React from "react";
import Note from "./Note";
import './styles/NotesList.css';
const NotesList = ({ notesList, deleteNote }) => {
  function handleDelete(e, id) {
    deleteNote(id);
  }

  return (
    <div className="notes-list-container">
      {notesList.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default NotesList;
