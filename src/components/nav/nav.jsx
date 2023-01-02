import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsContainer from './friends/friendsContainer';
import style from './nav.module.css';
import ProfileBar from './profileBar/profileBar';

const Nav = ({isAuth, logout, profile}) => {

  const nameClass = e => e.isActive ? style.active : style.item;

  return (
    <nav className={style.nav}>
      <div className={style.login}>
                <ProfileBar profile={profile} isAuth={isAuth} logout={logout} /> 
            </div>
            <div className={style.line}></div>
      <div className={style.menu}>
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
      </div>
      <div className={style.line}></div>
      <div className={style.linkFriends}>
        <h3 className={style.friends}>
          Друзья
        </h3>
        <FriendsContainer />
      </div>
    </nav>);
}

export default Nav;