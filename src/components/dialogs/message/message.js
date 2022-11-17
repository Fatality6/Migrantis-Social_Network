import React from 'react';
import style from "./../dialogs.module.css";


const Message = (props) => {

  const dialogsItems = props.state

  const dialogsElements = dialogsItems.map(d => <div className={style.item}>{d.message}</div>);

  return (
    <div>
      {dialogsElements}
    </div>);
}

export default Message;