import React from "react";

function DoneImg({ done, checkImg }) {
  if (done) {
    return <img src={checkImg} alt="check" />;
  } else {
    return <img src={require('../assets/wait.png')} alt="wait" />;
  }
}

export default DoneImg;

