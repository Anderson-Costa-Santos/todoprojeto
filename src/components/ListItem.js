
import React from "react"
import CardBox from "./CardBox";

function DoneImg(props) {

    if (props.done) {
        return (<img src="./assets/check.png" alt="check"></img>)
    } else {
        return (<img src="./assets/wait.png" alt="wait"></img>)
    }

}

function ListItem(props) {
    return (<li>
        <CardBox className={props.item.done ? "done item" : "item"}>
            {props.item.text}
            <div>
                <button onClick={() => { props.onDone(props.item) }}><DoneImg done={props.item.done}></DoneImg></button>
                <button onClick={() => { props.onItemDeleted(props.item) }}><img src="./assets/delete.png" alt="delete"></img></button>
            </div>
        </CardBox>
    </li>)

}

export default ListItem;