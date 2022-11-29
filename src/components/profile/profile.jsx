import React from 'react';
//import style from "./profile.module.css";
import MypostsContainer from './myPosts/mypostsContainer';
import ProfileInfoContainer from './profileInfo/profileInfoContainer';

const Profile = () => {
  
  return (
    <div>
      <ProfileInfoContainer />
      <MypostsContainer />
    </div>);
}

export default Profile;