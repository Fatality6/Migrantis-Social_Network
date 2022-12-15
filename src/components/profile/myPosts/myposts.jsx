import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength30, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControl/FormsControls';
import style from './myposts.module.css';
import Post from './posts/post'

const MypostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field  
          name={'post'} 
          component={ Textarea } 
          validate ={[required, maxLength30]} 
          placeholder = {'введите текст поста'}
        />
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
