import React from 'react';
import {
  FaTrash,
} from "react-icons/fa";
const Note = (props) => {
    return (
      <div className="note-container">
        <div className="note-title">{props.title}</div>
        <div className="note-content">{props.content}</div>
        <div className="note-actions">
          <button
            className="delete"
            onClick={(e) => props.handleDelete(e, props.id)}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    );
};

export default Note;
