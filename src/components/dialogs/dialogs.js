import React from 'react';
import Names from './names/names';
import style from "./dialogs.module.css";
import Message from './message/message';

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div>
        <Names state={props.state.dialogs} />
      </div>
      <div className={style.dialogItems}>
        <Message state={props.state.messages} addMessage={props.addMessage}/>
      </div>
    </div>);
}

export default Dialogs;