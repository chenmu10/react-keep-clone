import React from 'react';
import {
  FaTrash,
} from "react-icons/fa";
import './styles/Note.css';

const Note = ({title,content,id, handleDelete}) => {
    return (
      <div className="note-container">
        <div className="note-title">{title}</div>
        <div className="note-content">{content}</div>
        <div className="note-actions">
          <button
            className="delete"
            onClick={(e) => handleDelete(e, id)}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    );
};

export default Note;
