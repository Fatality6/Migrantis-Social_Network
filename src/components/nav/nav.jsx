import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsContainer from './friends/friendsContainer';
import style from './nav.module.css';

const Nav = () => {

  const nameClass = e => e.isActive ? style.active : style.item;

  return (
    <nav className={style.nav}>
      <div className={style.link}>
        <NavLink to="/profile" className={nameClass}>
          Профиль
        </NavLink>
      </div>
      <div className={style.link}>
        <NavLink to="/dialogs" className={nameClass}>
          Сообщения
        </NavLink>
      </div>
      <div className={style.link}>
        <NavLink to="/news" className={nameClass}>
          Новости
        </NavLink>
      </div>
      <div className={style.link}>
        <NavLink to="/music" className={nameClass}>
          Музыка
        </NavLink>
      </div>
      <div className={style.link}>
        <NavLink to="/users" className={nameClass}>
          Поиск
        </NavLink>
      </div>
      <div className={style.link}>
        <NavLink to="/setting" className={nameClass}>
          Настройки
        </NavLink>
      </div>
      <div className={style.linkFriends}>
        <h3 className={style.friends}>
          Друзья
        </h3>
        <FriendsContainer />
      </div>
    </nav>);
}

export default Nav;