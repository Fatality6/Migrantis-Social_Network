import React from 'react';
import style from "./myposts.module.css";
import Post from './posts/post'

const Myposts = (props) => {

  const postData = props.posts;

  const postsElement = postData.map(p => <Post message={p.message} likes={p.likes} avatar={props.avatar} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={style.textarea}>
      <h3>Мои посты</h3>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
      </div>
      <div>
        <button onClick={onAddPost}>Send</button>
      </div>
      <div className={style.posts}>
        {postsElement}
      </div>
    </div>);
}
export default Myposts;