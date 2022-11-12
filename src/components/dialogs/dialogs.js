import React from 'react';
import Names from './dialogNames';
import style from "./dialogs.module.css";

const Message = (props) => {
  return <div className={style.item}>{props.message}</div>
}

const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <div>
        <Names />
      </div>
      <div className={style.dialogItems}>
        <Message message='Hi !' />
        <Message message='how are you?' />
        <Message message='Where are you?' />
      </div>
    </div>);
}

export default Dialogs;