import React from 'react';
import CardBox from './CardBox';
import DoneImg from './DoneImg'; // componente que renderiza check ou wait
import checkImg from '../assets/check.png';
import deleteImg from '../assets/delete.png';

function ListItem({ item, onDone, onItemDeleted }) {
  return (
    <li>
      <CardBox className={item.done ? "done item" : "item"}>
        {item.text}
        <div>
          <button onClick={() => onDone(item)}>
            {/* Passa a imagem de check como prop para DoneImg */}
            <DoneImg done={item.done} checkImg={checkImg} />
          </button>
          <button onClick={() => onItemDeleted(item)}>
            <img src={deleteImg} alt="delete" />
          </button>
        </div>
      </CardBox>
    </li>
  );
}

export default ListItem;

