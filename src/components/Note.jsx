import React from "react";
import { FaTrash } from "react-icons/fa";
import "./styles/Note.css";
import NoteActions from "./styles/NoteActions";

const Note = ({
  title = "Title",
  content = "Enter your text..",
  id = "dummy",
  handleDelete,
}) => {
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    // console.log(inputRef);
    // inputRef.current.focus();
    // inputRef.current.style.height = "200px";
    document.querySelector(".App").addEventListener("click", () => {
      inputRef.current.style.height = "auto";
    });
    return () =>
      document.querySelector(".App").removeEventListener("click", null);
  }, [inputRef]);

  const resizeText = () => {
    inputRef.current.focus();
    inputRef.current.style.height = "200px";
  };
  console.log(inputRef.current);
  return (
    <div className="note-container" ref={inputRef} onClick={resizeText}>
      <div placeholder="Title" contentEditable={true} className="note-title">
        {title}
      </div>
      <div
        placeholder="Take a note..."
        contentEditable={true}
        className="note-content"
      >
        {content}
      </div>
      <NoteActions id={id} handleDelete={handleDelete} />
    </div>
  );
};

export default Note;
