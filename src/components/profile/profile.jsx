import React from 'react'
import style from "./profile.module.css"
import MypostsContainer from './myPosts/mypostsContainer'
import ProfileInfo from './profileInfo/profileInfo'


const Profile = ({savePhoto, isOwner, profile, status, updateStatus, logout, saveProfile}) => {
  return (
    <div>
      <div className={style.bg}>
        <img src="https://pbs.twimg.com/media/DSP6p7rWkAAidks.jpg:large" alt="bg" />
      </div>
      <ProfileInfo
        savePhoto={savePhoto}
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateStatus={updateStatus} 
        logout={logout}
        saveProfile={saveProfile}
      />
      <MypostsContainer profile={profile}/>
    </div>);
}

export default Profile;