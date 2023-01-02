import React from 'react';
import Paginator from '../common/Paginators/Paginator';
import User from './user';
import style from './users.module.css';
import Preloader from '../common/preloader/preloader';

const Users = (props) => {

  return (
    <div>
      <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
        totalUserCount={props.totalUserCount} pageSize={props.pageSize}
      />
      {props.isFetching ? <Preloader /> : 
      <div className={style.usersWrapper}>
      {
        props.users.map(u => <User
          user={u}
          followingIsProgress={props.followingIsProgress}
          unfollow={props.unfollow}
          follow={props.follow}
          isAuth={props.isAuth}
          key={u} />
        )}
        </div>}
    </div>
  )
}

export default Users;