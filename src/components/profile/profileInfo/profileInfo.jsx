import React from 'react';
import style from "./profileInfo.module.css";


const ProfileInfo = (props) => {

  return (
    <div className={style.content}>
      <div>
        <img src="https://i.mycdn.me/i?r=A1FATOtv0sf3iMJ4DfgHqlLfzh-PfG96QklNjt_Zl2oTzejiv63S2J1ntXOt_Dkp7wzxHwTc1pbJDLTunp-11aeNUIqaKnlBtWsIgf_49wANKA" alt="" />
      </div>
      <div className={style.description}>
        <img src={props.state.avatar} alt='' />
        <span className={style.text}>{props.state.name}, {props.state.years}, {props.state.major}</span>
      </div>
    </div>);
}

export default ProfileInfo;