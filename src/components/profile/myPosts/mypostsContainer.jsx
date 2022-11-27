import React from 'react';
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../redux/profileReducer';
import Myposts from './myposts';

const MypostsContainer = (props) => {
  let state = props.store.getState();


  let addPost = () => {
    props.store.dispatch(addPostActionCreater());
  }

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreater(text));
  }

  return (
      <Myposts 
        posts = {state.profilePage.posts}
        newPostText = {state.profilePage.newPostText}
        avatar = {state.profilePage.info.avatar}
        updateNewPostText = {onPostChange} 
        addPost = { addPost } 
      />
    );
}

export default MypostsContainer;