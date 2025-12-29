import React from 'react';
import ListItem from './ListItem';

function List({ items, onDone, onItemDeleted }) {
  return (
    <ul>
      {items.map(item => (
        <ListItem 
          key={item.id} 
          item={item} 
          onDone={onDone} 
          onItemDeleted={onItemDeleted} 
        />
      ))}
    </ul>
  );
}

export default List;
