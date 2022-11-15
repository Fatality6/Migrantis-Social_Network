import React from 'react';
import Names from './dialogNames';
import style from "./dialogs.module.css";

let dialogsMessages = [
  { id: '1', message: 'Hi hi hi!' },
  { id: '2', message: 'how are you?' },
  { id: '3', message: 'Where are you?' }
]

const Message = (props) => {
  return <div className={style.item}>{props.message}</div>
}

let dialogsElements = dialogsMessages
  .map(d => <Message message={d.message} />)

const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <div>
        <Names />
      </div>
      <div className={style.dialogItems}>
        {dialogsElements}
      </div>
    </div>);
}

export default Dialogs;