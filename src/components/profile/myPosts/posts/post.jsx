import React from 'react';
import style from "./post.module.css";

const Posts = (props) => {
  return (
    <div>
      <div className={style.item}>
        {props.message}
      </div>
      <div><span>Like: {props.likes}</span></div>
    </div>);
}

export default Posts;