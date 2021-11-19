import React from 'react';

const MyComponent = ({title,content}) => {
    return (
        <div className="note-container">
            <div className="note-title">{title}</div>
            <div className="note-content">{content}</div>
        </div>
    );
};

export default MyComponent;
