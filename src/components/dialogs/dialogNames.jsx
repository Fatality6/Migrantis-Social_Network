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
  return (
    <div className={style.names}>
      <NameItem name='Иван' id='1' />
      <NameItem name='Андрей' id='2' />
      <NameItem name='Олег' id='3' />
      <NameItem name='Игорь' id='4' />
      <NameItem name='Ксения' id='5' />
    </div>
  );
}

export default Names;