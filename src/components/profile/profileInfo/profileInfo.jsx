import React from 'react';
import Preloader from '../../common/preloader/preloader';
import style from "./profileInfo.module.css";
import photoUser from './../../../img/user.png';



const ProfileInfo = (props) => {

  if (props.profile == null) {
    return <Preloader />
  }

  return (
    <div className={style.content}>
      <div>
        <img src="https://i.mycdn.me/i?r=A1FATOtv0sf3iMJ4DfgHqlLfzh-PfG96QklNjt_Zl2oTzejiv63S2J1ntXOt_Dkp7wzxHwTc1pbJDLTunp-11aeNUIqaKnlBtWsIgf_49wANKA" alt="" />
      </div>
      <div className={style.description}>
        <img src={props.profile.photos.large ? props.profile.photos.large : photoUser} alt='' />
        <div className={style.box}>
          <div className={style.text}>{props.profile.fullName}</div>
          <div className={style.text}>{props.profile.aboutMe}</div>
          <div className={style.text}>{props.profile.lookingForAJobDescription}</div>
          <div className={style.text}>{props.profile.contacts.vk}</div>
        </div>
      </div>
    </div>);
}

export default ProfileInfo;