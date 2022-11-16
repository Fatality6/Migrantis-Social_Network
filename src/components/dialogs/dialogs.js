import React from 'react';
import Names from './names/names';
import style from "./dialogs.module.css";
import Message from './message/message';

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div>
        <Names items={props.dialogsName}/>
      </div>
      <div className={style.dialogItems}>
        <Message items={props.dialogsItems} />
      </div>
    </div>);
}

export default Dialogs;