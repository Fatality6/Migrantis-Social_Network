import React from 'react';
//import style from "./profile.module.css";
import MypostsContainer from './myPosts/mypostsContainer';
import ProfileInfo from './profileInfo/profileInfo';


const Profile = (props) => {

  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status}/>
      <MypostsContainer />
    </div>);
}

export default Profile;