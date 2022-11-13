import React from 'react';
import Names from './dialogNames';
import style from "./dialogs.module.css";

const Message = (props) => {
  return <div className={style.item}>{props.message}</div>
}

const Dialogs = () => {

  let dialogsMessages = [
    { id: '1', message: 'Hi !' },
    { id: '2', message: 'how are you?' },
    { id: '3', message: 'Where are you?' }
  ]


  return (
    <div className={style.dialogs}>
      <div>
        <Names />
      </div>
      <div className={style.dialogItems}>
        <Message message={dialogsMessages[0].message} />
        <Message message={dialogsMessages[1].message} />
        <Message message={dialogsMessages[2].message} />
      </div>
    </div>);
}

export default Dialogs;