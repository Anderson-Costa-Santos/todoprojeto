import React from 'react';

function CardBox(props) {
    return <div className={props.className? `${props.className} card`: "card"}>
        {props.children}
    </div>
}

export default CardBox;