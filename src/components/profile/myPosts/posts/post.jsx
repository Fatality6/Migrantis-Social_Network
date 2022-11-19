import React from 'react';
import style from "./post.module.css";

const Posts = (props) => {
  return (
    <div>
      <div className={style.item}>
        <img src={props.avatar} />
        <span className={style.text}>{props.message}</span>
      </div>
      <div>
        <span>Like: {props.likes}</span>
      </div>
    </div>);
}

export default Posts;