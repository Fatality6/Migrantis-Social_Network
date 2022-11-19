import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from './friends/friends';
import style from './nav.module.css';

const Nav = (props) => {
  
  return (
    <nav className={style.nav}>
      <div className={style.link}>
        <NavLink to="/profile" className={e => e.isActive ? style.active : style.item}>
          Профиль
        </NavLink>
      </div>
      <div className={style.link}>
        <NavLink to="/dialogs" className={e => e.isActive ? style.active : style.item}>
          Сообщения
        </NavLink>
      </div>
      <div className={style.link}>
        <NavLink to="/news" className={e => e.isActive ? style.active : style.item}>
          Новости
        </NavLink>
      </div>
      <div className={style.link}>
        <NavLink to="/music" className={e => e.isActive ? style.active : style.item}>
          Музыка
        </NavLink>
      </div>
      <div className={style.link}>
        <NavLink to="/setting" className={e => e.isActive ? style.active : style.item}>
          Настройки
        </NavLink>
      </div>
      <div className={style.linkFriends}>
        <h3 className={style.friends}>
          Друзья
        </h3>
        <Friends state={props.state.friends} />
      </div>
    </nav>);
}

export default Nav;