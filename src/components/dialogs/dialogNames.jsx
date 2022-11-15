import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './dialogNames.module.css';

const NameItem = (props) => {
  let path = "/dialogs/" + props.id;
  return <div className={style.items}>
    <NavLink className={style.link} to={path} > {props.name}</NavLink>
  </div>
}

const Names = () => {

  const dialogsData = [
    { id: '1', name: 'Иван' },
    { id: '2', name: 'Андрей' },
    { id: '3', name: 'Олег' },
    { id: '4', name: 'Игорь' },
    { id: '5', name: 'Игорян' },
    { id: '6', name: 'Ксения' }
  ]

  const dialogsElements = dialogsData.map(d => <NameItem name={d.name} id={d.id} />)

  return (
    <div className={style.names}>
      {dialogsElements}
    </div>
  );
}

export default Names;