import React from 'react';
import style from "./dialogs.module.css";
import MessageContainer from './message/messageContainer';
import NamesContainer from './names/namesContainer';


const Dialogs = (props) => {
  
  return (
    <div className={style.dialogs}>
      <div>
        <NamesContainer store={props.store} />
      </div>
      <div className={style.dialogItems}>
        <MessageContainer store={props.store}/>
      </div>
    </div>);
}

export default Dialogs;