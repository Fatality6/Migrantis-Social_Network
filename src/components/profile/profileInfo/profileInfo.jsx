import React from 'react';
import Preloader from '../../common/preloader/preloader';
import style from "./profileInfo.module.css";
import photoUser from '../../../img/user.png';
import ProfileStatus from './profileStatus';
import { useState } from 'react';
import ProfileDataForm from './profileDataForm';



const ProfileInfo = ({savePhoto, isOwner, profile, status, updateStatus, logout, saveProfile}) => {

  const [editMode, setEditMode] = useState(false)

  const onSubmit = (formData) => {
    saveProfile(formData)
}


  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  if (profile == null) {
    return <Preloader />
  }

  return <>
    <div className={style.content}>
      <div className={style.description}>
        <img src={profile.photos.large ? profile.photos.large : photoUser} alt='' />

        { editMode 
          ? <ProfileDataForm  profile={profile}
                              onSubmit={onSubmit}/> 
          : <ProfileData  profile={profile} 
                          isOwner={isOwner} 
                          onEditMode={()=>{setEditMode(true)}}/>
        }

      </div>
    </div>
    <div className={style.status}>
      <div><b>Статус : </b></div>
      <div className={style.statusInput}>
        <ProfileStatus status={status} updateStatus={updateStatus} />
      </div>
    </div>
    <div>
      {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
    </div>
    <div>
      <button onClick={logout} className={style.btn}>выйти</button>
    </div>
  </>;
}

const ProfileData = ({profile, isOwner, onEditMode}) => {
  
  return (
    <div className={style.box}>
      {isOwner &&
        <div>
          <button onClick={onEditMode}>редактировать</button>
        </div>}
      <div className={style.text}>
        <b>Ник : </b>{profile.fullName}
      </div>
      <div className={style.text}>
        <b>В поисках работы : </b>{profile.lookingForAJob ? 'Да' : 'Нет'}
      </div>
      {profile.lookingForAJob &&
        <div className={style.text}>
          <b>Что я умею : </b>{profile.lookingForAJobDescription}
        </div>}
      <div className={style.text}>
        <b>Обо мне : </b>{profile.aboutMe}
      </div>
      <div className={style.text}>
        <b>Мои контакты : </b>{Object.keys(profile.contacts).map(key => {
          return <Contact key={key} title={key} value={profile.contacts[key]} />
        })}
      </div>
      <div className={style.text}>
        {profile.contacts.vk}
      </div>
    </div>
  )
}

const Contact = ({title, value}) => {
  return <div><b>{title}</b> : {value}</div>
}

export default ProfileInfo;