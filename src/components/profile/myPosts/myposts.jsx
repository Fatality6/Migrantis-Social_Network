import React from 'react';
import style from "./myposts.module.css";
import Post from './posts/post'

const Myposts = () => {

  let postsData = [
    { id: '1', message: 'Hi !', likes: 15 },
    { id: '2', message: 'how are you?', likes: 20 },
    { id: '3', message: 'Where are you?', likes: 17 }
  ]

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
        <Post message={postsData[0].message} likes={postsData[0].likes} />
        <Post message={postsData[1].message} likes={postsData[1].likes} />
        <Post message={postsData[2].message} likes={postsData[2].likes} />
      </div>
    </div>);
}
export default Myposts;