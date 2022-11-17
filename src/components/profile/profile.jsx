import React from 'react';
import style from "./profile.module.css";
import Myposts from "./myPosts/myposts"
import ProfileInfo from './profileInfo/profileInfo';

const Profile = (props) => {
  return (
    <div className={style.content}>
      <ProfileInfo />
      <Myposts state={props.state} />
    </div>);
}

export default Profile;