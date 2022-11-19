import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './names.module.css';

const Names = (props) => {

  const NameItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
      <div className={style.names}>
        <img src={props.avatar} alt='' />
        <NavLink className={e => e.isActive ? style.active : style.item} to={path} > {props.name}</NavLink>
      </div>)
  }

  const dialogsName = props.state

  const dialogsElements = dialogsName.map(d => <NameItem name={d.name} id={d.id} avatar={d.avatar}/>)

  return (
    <div>
      {dialogsElements}
    </div>
  );
}

export default Names;