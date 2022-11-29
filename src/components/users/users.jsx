import React from 'react';
import style from "./users.module.css";

const Users = (props) => {
    return (
      props.users.map( u => 
      <div className={style.user} key={u.id}>
        <div  className={style.ava}>
          <div className={style.img}>
            <img src= {u.avatar} />
          </div>
          <div className={style.btn}>
            { u.followed 
            ? <button onClick={()=>{ props.unfollow(u.id) }}>удалить</button>
            : <button onClick={()=>{ props.follow(u.id) }}>добавить</button> }
          </div>
        </div>
        <div className={style.info}>
          <div className={style.leftText}>
            <div> {u.name} </div>
            <div> {u.status} </div>
          </div>
          <div className={style.rightText}>
            <div> {u.location.city} </div>
            <div> {u.location.country} </div>
          </div>
        </div>
      </div> )
    );
}

export default Users;