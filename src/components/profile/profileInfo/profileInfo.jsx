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
    <div className={style.description}>
      <div>
        <img src={profile.photos.large ? profile.photos.large : photoUser} alt='photoUser' />
        
          {isOwner &&
            <div className={style.camera}>
              <input name="file" type="file" id="input__file" className={style.inputPhoto} onChange={onMainPhotoSelected} />
              <label htmlFor='input__file' className={style.label}>
                <img src='https://www.gstatic.com/images/icons/material/system/2x/photo_camera_white_24dp.png' alt='camera' />
              </label>
            </div>}
        
      </div>
      <div className={style.editProffile}>
        <button onClick={() => { setEditMode(true) }}>Редактировать профиль</button>
      </div>
      <div className={style.more}>
        <button onClick={logout}>Выйти</button>
      </div>
    </div>

    <div className={style.profileInfo}>
      <div className={style.fullName}>
        <b>{profile.fullName}</b>
      </div>

      <div className={style.status}>
        <ProfileStatus status={status} updateStatus={updateStatus} />
      </div>

      <div className={style.box}>
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

    </div>

    <div>
      {editMode &&
        <ProfileDataForm initialValues={profile}
          onSubmit={onSubmit}
          profile={profile}
          onEditMode={() => { setEditMode(false) }}
          editMode={editMode} />}
      <ProfileData profile={profile}
        isOwner={isOwner} />
    </div>



  </>;
}

const ProfileData = ({ profile, isOwner, onEditMode }) => {

  return <>
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