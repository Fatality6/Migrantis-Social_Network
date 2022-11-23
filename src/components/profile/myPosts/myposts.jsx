import React from 'react';
import style from "./myposts.module.css";
import Post from './posts/post'

const Myposts = (props) => {

  const postData = props.state.posts;

  const postsElement = postData.map(p => <Post message={p.message} likes={p.likes} avatar={props.state.info.avatar} />);

  let newPostElement = React.createRef();

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ 
      type: 'UPDATE-NEW-POST-TEXT',
      text: text
  });
  }

  let addPost = () => {
    props.dispatch({ type:'ADD-POST' });
  }

  return (
    <div className={style.textarea}>
      <h3>Мои посты</h3>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.state.newPostText}></textarea>
      </div>
      <div>
        <button onClick={addPost}>Send</button>
      </div>
      <div className={style.posts}>
        {postsElement}
      </div>
    </div>);
}
export default Myposts;