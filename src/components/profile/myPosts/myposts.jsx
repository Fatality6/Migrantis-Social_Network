import React from 'react';
import style from "./myposts.module.css";
import Post from './posts/post'

const Myposts = () => {

  let postsData = [
    { id: '1', message: 'Hi world!', likes: 15 },
    { id: '2', message: 'how are you?', likes: 20 },
    { id: '3', message: 'Where are you?', likes: 17 }
  ]

  let postsElement = postsData.map(p => <Post message={p.message} likes={p.likes} />)

  return (
    <div className={style.textarea}>
      <h3>Мои посты</h3>
      <div>
        <textarea></textarea>
      </div>
      <div >
        <button>Send</button>
      </div>
      <div className={style.posts}>
        {postsElement}
      </div>
    </div>);
}
export default Myposts;