import React from 'react';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import style from "./dialogs.module.css";
import MessageContainer from './message/messageContainer';
import NamesContainer from './names/namesContainer';

const Dialogs = () => {
  
  return (
    <div className={style.dialogs}>
      <div>
        <NamesContainer />
      </div>
      <div className={style.dialogItems}>
        <MessageContainer />
      </div>
    </div>);
}

export default withAuthRedirect(Dialogs);