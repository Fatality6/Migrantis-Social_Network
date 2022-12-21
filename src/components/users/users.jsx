import React from 'react';
import Paginator from '../common/Paginators/Paginator';
import User from './user';

const Users = (props) => {

  return (
    <div>
      <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
        totalUserCount={props.totalUserCount} pageSize={props.pageSize}
      />
      {
        props.users.map(u => <User
          user={u}
          followingIsProgress={props.followingIsProgress}
          unfollow={props.unfollow}
          follow={props.follow}
          isAuth={props.isAuth}
          key={u} />
        )}
    </div>
  )
}

export default Users;