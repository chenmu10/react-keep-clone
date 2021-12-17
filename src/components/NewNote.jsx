import React, { useState } from "react";
import "./styles/NewNote.css";
import Note from "./Note";

const NewNote = (props) => {
  let isOpenFullForm = false;
  const inputRef = React.useRef(null);
  //const OpenForm = () => {return <div><input type="text" placeholder="Title"/><input placeholder="take a note..." type="text" /></div>}

  const [text, setText] = useState("");
  const [newNote, setNote] = useState({});

  function openFullForm(e) {
    isOpenFullForm = true;
  }



  function addNewNote(e) {
    const id = new Date().getTime();
    const note = { id: id, title: text, content: text };
    setText("");
    props.addNewNoteHandler(note);
  }

  return (
    <div className="new-note-container">
      <Note handleDelete={props.handleDelete} />
    </div>
  );
};

export default NewNote;
