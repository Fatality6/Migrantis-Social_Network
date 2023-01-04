import React from 'react';
import Preloader from '../../common/preloader/preloader';
import style from "./profileInfo.module.css";
import photoUser from '../../../img/user.png';
import ProfileStatus from './profileStatus';
import { useState } from 'react';
import ProfileDataForm from './profileDataForm';



const ProfileInfo = ({ savePhoto, isOwner, profile, status, updateStatus, logout, saveProfile }) => {

  const [editMode, setEditMode] = useState(false)

  const onSubmit = (formData) => {
    saveProfile(formData).then(
      () => {
        setEditMode(false)
      }
    )
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
      <div htmlFor='input__file' className={style.description}>
        <img src={profile.photos.large ? profile.photos.large : photoUser} alt='' />

        {editMode &&
        <ProfileDataForm initialValues={profile}
            onSubmit={onSubmit}
            profile={profile} 
            onEditMode={() => { setEditMode(false) }} 
            editMode={editMode}/>}
        <ProfileData profile={profile}
            isOwner={isOwner}
            onEditMode={() => { setEditMode(true) }} />
        

      </div>
    </div>
    <div className={style.status}>
      <div><b>Статус : </b></div>
      <div className={style.statusInput}>
        <ProfileStatus status={status} updateStatus={updateStatus} />
      </div>
    </div>
    
      {isOwner && 
    
    <div className={style.inputWrapper}>
      <input name="file" type="file" id="input__file" className={style.inputPhoto} onChange={onMainPhotoSelected}/>
      <label htmlFor='input__file' className={style.label}>
        Изменить аватар
      </label>
    </div>}
    <div>
      <button onClick={logout} className={style.btn}>выйти</button>
    </div>
  </>;
}

const ProfileData = ({ profile, isOwner, onEditMode }) => {

  return <>
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
    </div>
    <div className={style.text + ' ' + style.contacts}>
      <b>Мои контакты : </b>{Object.keys(profile.contacts).map(key => {
        return <Contact key={key} title={key} value={profile.contacts[key]} />
      })}
    </div>
  </>
}

const Contact = ({ title, value }) => {
  return <div><b>{title}</b> : {value ? value : 'нет'}</div>
}

export default ProfileInfo;