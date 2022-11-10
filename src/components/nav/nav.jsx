import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './nav.module.css';

const Nav = () => {
  return (
    <nav className={style.nav}>
      <div className={style.link}>
        <NavLink to="/profile" className={style.item}>Profile</NavLink>
      </div>
      <div className={style.link}>
        <NavLink to="/dialogs" className={style.item}>Messages</NavLink>
      </div>
      <div className={style.link}>
        <NavLink to="/news" className={style.item}>News</NavLink>
      </div>
      <div className={style.link}>
        <NavLink to="/music" className={style.item}>Music</NavLink>
      </div>
      <div className={style.link}>
        <NavLink to="/setting" className={style.item}>Setting</NavLink>
      </div>
    </nav>);
}

export default Nav;