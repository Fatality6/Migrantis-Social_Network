import React from 'react';
import style from './users.module.css';
import photoUser from './../../img/user.png';
import { NavLink } from 'react-router-dom';

const User = ({ user, followingIsProgress, unfollow, isAuth, follow }) => {

  return (
    <div className={style.user}>
      <div className={style.ava}>
        <NavLink to={'/profile/' + user.id}>
          <div className={style.img}>
            <img src={user.photos.small ? user.photos.small : photoUser} alt='photoUser' />
          </div>
        </NavLink>

        <div className={style.btn}>
          {user.followed
            ? <button
              disabled={followingIsProgress.some(id => id === user.id)}
              onClick={() => { unfollow(user.id); }}>удалить
            </button>
            : <button
              disabled={followingIsProgress.some(id => id === user.id)}
              onClick={() => { isAuth && follow(user.id); }}>добавить
            </button>
          }
        </div>
      </div>
      <div className={style.info}>
        <div className={style.leftText}>
          <div> {user.name} </div>
          <div> {user.status === null ? 'Нет статуса' : user.status} </div>
        </div>
        <div className={style.rightText}>
          <div> ID: {user.id} </div>
          <div> {'страна не указана'} </div>
        </div>
      </div>
    </div>
  )

}

export default User;