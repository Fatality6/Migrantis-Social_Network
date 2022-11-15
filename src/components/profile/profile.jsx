import React from 'react';
import style from "./profile.module.css";
import Myposts from "./myPosts/myposts"
import ProfileInfo from './profileInfo/profileInfo';

const Profile = () => {

  const postsData = [
    { id: '1', message: 'Hi world!', likes: 15 },
    { id: '2', message: 'how are you?', likes: 20 },
    { id: '3', message: 'Where are you?', likes: 17 }
  ]

  return (
    <div className={style.content}>
      <ProfileInfo />
      <Myposts posts={postsData} />
    </div>);
}

export default Profile;