import React from 'react';
import Names from './names';


const NamesContainer = (props) => {

let state = props.store.getState();

  return (
    <Names state={state.messagesPage.dialogs}/>
  );
}

export default NamesContainer;