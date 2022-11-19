import React from 'react';
import style from "./profile.module.css";
import Myposts from "./myPosts/myposts"
import ProfileInfo from './profileInfo/profileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo state={props.state.info} />
      <Myposts state={props.state} />
    </div>);
}

export default Profile;