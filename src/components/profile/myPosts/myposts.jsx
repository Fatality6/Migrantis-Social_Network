import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './myposts.module.css';
import Post from './posts/post'

const MypostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder='введите текст' name={'post'} component={'textarea'} />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const MypostReduxForm = reduxForm ({ form: 'mypost' })(MypostsForm);

const Myposts = (props) => {
  const postData = props.posts;
  const postsElement = postData.map(p => <Post
    message={p.message}
    likes={p.likes}
    key={p.id}
    profile={props.profile}
  />);

  const onSubmit = (post) => {
    props.addPost(post);
}

  return (
    <div className={style.textarea}>
      <h3>Мои посты</h3>
      <MypostReduxForm onSubmit={onSubmit}/>
      <div className={style.posts}>
        {postsElement}
      </div>
    </div>);
}
export default Myposts;
