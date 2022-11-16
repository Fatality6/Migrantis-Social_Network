import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './names.module.css';

const Names = (props) => {

  const NameItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
    <div className={style.names}>
      <NavLink className={style.link} to={path} > {props.name}</NavLink>
    </div>)
  }

  const dialogsName = props.items

  const dialogsElements = dialogsName.map(d => <NameItem name={d.name} id={d.id} />)

  return (
    <div>
      {dialogsElements}
    </div>
  );
}

export default Names;