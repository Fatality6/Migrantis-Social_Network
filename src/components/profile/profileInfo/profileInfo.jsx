import React from 'react';
import style from "./profileInfo.module.css";


const ProfileInfo = (props) => {

  let state = props.store.getState();
  return (
    <div className={style.content}>
      <div>
        <img src="https://i.mycdn.me/i?r=A1FATOtv0sf3iMJ4DfgHqlLfzh-PfG96QklNjt_Zl2oTzejiv63S2J1ntXOt_Dkp7wzxHwTc1pbJDLTunp-11aeNUIqaKnlBtWsIgf_49wANKA" alt="" />
      </div>
      <div className={style.description}>
        <img src={state.profilePage.info.avatar} alt='' />
        <span className={style.text}>{state.profilePage.info.name}, {state.profilePage.info.years}, {state.profilePage.info.major}</span>
      </div>
    </div>);
}

export default ProfileInfo;