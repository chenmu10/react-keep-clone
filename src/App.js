import './App.css';
import Header from './components/Header'
import NewNote from "./components/NewNote"
import NotesList from "./components/NotesList"
import {useState} from "react"

function App() {
  const initialNotes = [{id:1, title:'note1',content: ''},{id:2, title:'great ',content: 'this is great'},
    {id:3, title:'hi chen',content: 'shalom shalom'},{id:4, title:'great ',content: 'this is great'},
    {id:5, title:'hi chen',content: 'shalom shalom'},{id:6, title:'great ',content: 'this is great'}]

  const [notes, setNotes] = useState(initialNotes);

    function addNote(newNote) {
        setNotes( [notes,newNote]);
    }

  return (
    <div className="App">
      <Header />
      <NewNote addNewNoteHandler={addNote}/>
      <NotesList notesList={notes}/>
    </div>
  );
}

export default App;
