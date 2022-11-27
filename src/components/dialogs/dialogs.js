import React from 'react';
import Names from './names/names';
import style from "./dialogs.module.css";
import Message from './message/message';
import { addMessageActionCreater, updateNewMessageTextActionCreater } from '../../redux/dialiogsReducer';

const Dialogs = (props) => {
  
  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreater());
  }

  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreater(text));
  }

  return (
    <div className={style.dialogs}>
      <div>
        <Names state={state.messagesPage.dialogs} />
      </div>
      <div className={style.dialogItems}>
        <Message 
          state={state.messagesPage.messages} 
          addMessage={addMessage}
          updateNewMessageText = {onMessageChange} 
          newMessageText = {state.messagesPage.newMessageText}
        />
      </div>
    </div>);
}

export default Dialogs;