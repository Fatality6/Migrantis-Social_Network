import React from 'react';
import style from "./myposts.module.css";
import Post from './posts/post'

const Myposts = (props) => {

  const postData = props.postsData;

  const postsElement = postData.map(p => <Post message={p.message} likes={p.likes} />)

  return (
    <div className={style.textarea}>
      <h3>Мои посты</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Send</button>
      </div>
      <div className={style.posts}>
        {postsElement}
      </div>
    </div>);
}
export default Myposts;