import React from 'react';
//import style from "./profile.module.css";
import MypostsContainer from './myPosts/mypostsContainer';
import ProfileInfo from './profileInfo/profileInfo';


const Profile = (props) => {

  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus} 
      />
      <MypostsContainer profile={props.profile}/>
    </div>);
}

export default Profile;