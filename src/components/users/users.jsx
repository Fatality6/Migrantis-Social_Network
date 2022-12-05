import React from 'react';
import style from "./users.module.css";
import photoUser from './../../img/user.png';
import { NavLink } from 'react-router-dom';

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let curP = props.currentPage;
  let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
  let curPL = curP + 5;
  let slicedPages = pages.slice(curPF, curPL);

  return (
    <div>
      <div className={style.pagination}>
        {slicedPages.map(p => {
          return <span className={props.currentPage === p ? style.selectedPage : style.unselectedPage}
            onClick={(e) => { props.onPageChanged(p) }} >{p} </span>
        })}
      </div>
      {props.users.map(u => {
        return (
          <div className={style.user} key={u.id}>
            <div className={style.ava}>
              <NavLink to={'/profile/' + u.id}>
                <div className={style.img}>
                  <img src={u.photos.small ? u.photos.small : photoUser} alt='' />
                </div>
              </NavLink>
              <div className={style.btn}>
                {u.followed
                  ? <button onClick={() => { props.unfollow(u.id) }}>удалить</button>
                  : <button onClick={() => { props.follow(u.id) }}>добавить</button>
                }
              </div>
            </div>
            <div className={style.info}>
              <div className={style.leftText}>
                <div> {u.name} </div>
                <div> {u.status === null ? 'Нет статуса' : u.status} </div>
              </div>
              <div className={style.rightText}>
                <div> {'город не указан'} </div>
                <div> {'страна не указана'} </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Users;