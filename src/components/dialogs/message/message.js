import React from 'react';
import style from './message.module.css';


const Message = (props) => {

  const MessageItem = (props) => {
    if (props.id % 2 === 0){
      return (
        <div className={style.messageArea}>
          <div className={style.itemRigth}>{props.message}</div>
        </div>)
    } else {
      return (
        <div className={style.messageArea}>
          <div className={style.itemLeft}>{props.message}</div>
        </div>)
    }
  }
  
  const dialogsItems = props.state
  const dialogsElements = dialogsItems.map(d => <MessageItem message={d.message} id={d.id}/>);

  return (
    <div>
      {dialogsElements}
    </div>);
}

export default Message;