//Building a place for our passing thoughts. Once we add a short thought, it’ll disappear after 15 secs.

import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState('');
  const handleTextChange = ({target}) => {
    const { value } = target;
    setText(value);
  };
  const handleSubmit = (event) => {
    if(text.length) {
      event.preventDefault();
      const thought = {
        id: generateId(),
        text: text,
        expiresAt: getNewExpirationTime()
      };
      props.addThought(thought);
      setText('');
    }; 
  }; 
  
  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
}
