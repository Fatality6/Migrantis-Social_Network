import React from 'react';
import style from "./post.module.css";

const Posts = (props) => {
  return (
    <div>
      <div className={style.item}>
        <img src='https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png' />
        <span className={style.text}>{props.message}</span>
      </div>
      <div>
        <span>Like: {props.likes}</span>
      </div>
    </div>);
}

export default Posts;