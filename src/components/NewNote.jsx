import React, {useState} from 'react';
import './styles/NewNote.css';

const NewNote = (props) => {
    let isOpenFullForm=false;
    //const OpenForm = () => {return <div><input type="text" placeholder="Title"/><input placeholder="take a note..." type="text" /></div>}

    const [text, setText] = useState('');
    const [newNote, setNote] = useState({});

    function openFullForm(e) {
        isOpenFullForm = true;
    }

    function addNewNote(e) {
        const id = new Date().getTime();
        const note = { id: id, title: text, content: text };
        setText('');
      props.addNewNoteHandler(note);
      
    }

    return (
      <div className="new-note-container">
        <input
          id="new-note"
          type="text"
          placeholder="Take a note..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button id="add-note-button" onClick={addNewNote}>Save</button>

        {/*{isOpenFullForm && <OpenForm />}*/}
      </div>
    );

};

export default NewNote;
