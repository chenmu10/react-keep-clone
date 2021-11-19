import React, {useState} from 'react';

const NewNote = (props) => {
    let isOpenFullForm=false;
    const OpenForm = () => {return <div><input type="text" placeholder="Title"/><input placeholder="take a note..." type="text" /></div>}

    const [newNote, setNote] = useState('');

    function openFullForm(e) {
        e.preventDefault();
        isOpenFullForm = true;
    }

    function addNewNote(e) {
        setNote({id:9, title:'new one',content: 'content content'});
        props.addNewNoteHandler(newNote);
        e.preventDefault();
    }

    return (
        <div className="new-note-container">
            <input id="new-note"  type="text" placeholder="Take a note..." value={newNote} onChange={(e)=>setNote(e.target.value)}/>
            <button onClick={addNewNote}>Save</button>

            {isOpenFullForm && <OpenForm />}
        </div>
    )

};

export default NewNote;
