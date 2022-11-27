import React from 'react';
import style from './friends.module.css';

const Friends = (props) => {
  
  const FriendItem = (props) => {
    return (
      <div className={style.item}>
        <img className={style.avatar} src={props.avatar} alt='' />
        <div className={style.name}> {props.name}</div>
      </div>)
  }

  const friends = props.state

  const friendsElements = friends.map(d => <FriendItem name={d.name} avatar={d.avatar} />)

  return (
    <div className={style.friends}>
      {friendsElements}
    </div>
  );
}

export default Friends;