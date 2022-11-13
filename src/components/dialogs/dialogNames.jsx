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

  let dialogsData = [
    { id: '1', name: 'Иван' },
    { id: '2', name: 'Андрей' },
    { id: '3', name: 'Олег' },
    { id: '4', name: 'Игорь' },
    { id: '5', name: 'Ксения' }
  ]

  return (
    <div className={style.names}>
      <NameItem name={dialogsData[0].name} id={dialogsData[0].id} />
      <NameItem name={dialogsData[1].name} id={dialogsData[1].id} />
      <NameItem name={dialogsData[2].name} id={dialogsData[2].id} />
      <NameItem name={dialogsData[3].name} id={dialogsData[3].id} />
      <NameItem name={dialogsData[4].name} id={dialogsData[4].id} />
    </div>
  );
}

export default Names;