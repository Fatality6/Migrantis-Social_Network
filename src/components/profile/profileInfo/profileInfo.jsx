import React from 'react';
import style from "./profileInfo.module.css";


const ProfileInfo = () => {
  return (
    <div className={style.content}>
      <div>
        <img src="https://i.mycdn.me/i?r=A1FATOtv0sf3iMJ4DfgHqlLfzh-PfG96QklNjt_Zl2oTzejiv63S2J1ntXOt_Dkp7wzxHwTc1pbJDLTunp-11aeNUIqaKnlBtWsIgf_49wANKA" alt="" />
      </div>
      <div className={style.description}>
        <img src='https://find.noeg.co.il/images/avatars/3.png' alt=''/>
        ava+description
      </div>
    </div>);
}

export default ProfileInfo;