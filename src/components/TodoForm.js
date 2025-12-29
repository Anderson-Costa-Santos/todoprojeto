import React, { useState } from 'react';

function TodoForm({ onAddItem }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim()) {
      onAddItem(text.trim());
      setText("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        id="todo-input" 
        name="todo-input"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
