import React from 'react';
import style from "./myposts.module.css";
import Post from './posts/post'

const Myposts = () => {
  return (
    <div>
      <div>
        <textarea></textarea>
        <button>Send</button>
      </div>
      <div className={style.posts}>
        <Post message='Hello world!' likes='15'/>
        <Post message='React this is great!' likes='20'/>
      </div>
    </div>);
}
export default Myposts;