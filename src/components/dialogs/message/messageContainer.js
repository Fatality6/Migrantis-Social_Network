import React from 'react';
import Message from './message';
import { addMessageActionCreater, updateNewMessageTextActionCreater } from '../../../redux/dialiogsReducer';

const MessageContainer = (props) => {
  
  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreater());
  }

  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreater(text));
  }

  return (
        <Message 
          state={state.messagesPage.messages} 
          addMessage={addMessage}
          updateNewMessageText = {onMessageChange} 
          newMessageText = {state.messagesPage.newMessageText}
        />
  )
}

export default MessageContainer;