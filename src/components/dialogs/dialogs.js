import React from 'react';
import Names from './names/names';
import style from "./dialogs.module.css";
import Message from './message/message';

const Dialogs = () => {

  const dialogsItems = [
    { id: '1', message: 'Hi hi hi!' },
    { id: '2', message: 'how are you?' },
    { id: '3', message: 'Where are you?' }
  ]

  const dialogsData = [
    { id: '1', name: 'Иван' },
    { id: '2', name: 'Андрей' },
    { id: '3', name: 'Олег' },
    { id: '4', name: 'Игорь' },
    { id: '5', name: 'Игорян' },
    { id: '6', name: 'Ксения' }
  ]

  return (
    <div className={style.dialogs}>
      <div>
        <Names items={dialogsData}/>
      </div>
      <div className={style.dialogItems}>
        <Message items={dialogsItems} />
      </div>
    </div>);
}

export default Dialogs;