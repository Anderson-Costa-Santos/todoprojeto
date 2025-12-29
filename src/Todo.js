import React, { useState, useEffect } from 'react';
import List from './components/List';
import TodoForm from './components/TodoForm';
import './Todo.css';

//SI gignifica SAVED ITEM
const SI = "savedItems";

function Todo() {
    const [items, setItems] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    // Carrega itens do localStorage
    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem(SI));
        if (savedItems) setItems(savedItems);
    }, []);


    function onAddItem(text) {
        const newItem = { id: Date.now(), text, done: false };
        const updatedItems = [...items, newItem];
        setItems(updatedItems);
        localStorage.setItem(SI, JSON.stringify(updatedItems));
    }

    function onItemDeleted(item) {
        const updatedItems = items.filter(it => it.id !== item.id);
        setItems(updatedItems);
        localStorage.setItem(SI, JSON.stringify(updatedItems));
    }

    function onDone(item) {
        const updatedItems = items.map(it => it.id === item.id ? { ...it, done: !it.done } : it);
        setItems(updatedItems);
        localStorage.setItem(SI, JSON.stringify(updatedItems));
    }

    // ===== DARK MODE =====
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);



    return (
        <div className="container">
            <h1>Todo</h1>
             <button className='dark-toggle' 
        onClick={() => setDarkMode(!darkMode)}
        style={{ marginBottom: '20px' }}
      >
        <span className="emoji">{darkMode ? '☀️' : '🌙'}</span>
      </button>
            <TodoForm onAddItem={onAddItem} />
            <List items={items} onDone={onDone} onItemDeleted={onItemDeleted} />
        </div>
    );

    
}

export default Todo;
