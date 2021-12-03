import "./App.css";
import Header from "./components/Header.jsx";
import NewNote from "./components/NewNote.jsx";
import NotesList from "./components/NotesList.jsx";
import { useState } from "react";

function App() {
  const initialNotes = [
    { id: 1, title: "Title", content: "" },
    { id: 2, title: "Title ", content: "note note" },
    { id: 3, title: "Title", content: "note note" },
    { id: 4, title: "Title ", content: "note note" },
    { id: 5, title: "Title", content: "note note" },
    { id: 6, title: "Title ", content: "note note " },
  ];

  const [notes, setNotes] = useState(initialNotes);

  function addNote(newNote) {
    setNotes([...notes, newNote]);
  }

  function deleteNote(id) {
    setNotes([...notes.filter((note) => note.id !== id)]);
  }

  return (
    <div className="App">
      <Header />
      <NewNote addNewNoteHandler={addNote} />
      <NotesList deleteNote={deleteNote} notesList={notes} />
    </div>
  );
}

export default App;
