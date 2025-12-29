import React from 'react';

function DoneImg({ done }) {
  return (
    <img 
      src={done ? "./assets/check.png" : "./assets/wait.png"} 
      alt={done ? "check" : "wait"} 
    />
  );
}

export default DoneImg;
