import React from 'react';
import Note from './Note';

const NotesList = ({notesList}) => {
    return (
        <div className="notes-list-container">
            {notesList.map(note => <Note key={note.id} id={note.id} title={note.title} content={note.content} />)}
        </div>
    );
}

export default NotesList;