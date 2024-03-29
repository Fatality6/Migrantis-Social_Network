import React from 'react';
import style from './users.module.css';
import photoUser from './../../img/user.jpg';
import { NavLink } from 'react-router-dom';

const User = ({ user, followingIsProgress, unfollow, isAuth, follow }) => {

  return (
    <div className={style.user}>

      <div className={style.info}>
      <div className={style.ava}>
        <NavLink to={'/profile/' + user.id}>
          <div className={style.img}>
            <img src={user.photos.large ? user.photos.large : photoUser} alt='photoUser' />
          </div>
        </NavLink>
        <div className={style.btn}>
          {user.followed
            ? <button
              disabled={followingIsProgress.some(id => id === user.id)}
              onClick={() => { unfollow(user.id); }}>удалить из друзей
            </button>
            : <button
              disabled={followingIsProgress.some(id => id === user.id)}
              onClick={() => { isAuth && follow(user.id); }}>добавить в друзья
            </button>
          }
        </div>
      </div>
        <div className={style.textInfo}>
          <div className={style.userName}> {user.name} </div>
          <div className={style.status}> {user.status === null ? 'Нет статуса' : user.status} </div>
        </div>
      </div>
      
    </div>
  )

}

export default User;