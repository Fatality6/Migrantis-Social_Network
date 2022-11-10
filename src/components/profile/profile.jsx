import React from 'react';
import style from "./profile.module.css";
import Myposts from "./myPosts/myposts"

const Profile = () => {
    return <div className={style.content}>
    <div>
      <img src="https://i.mycdn.me/i?r=A1FATOtv0sf3iMJ4DfgHqlLfzh-PfG96QklNjt_Zl2oTzejiv63S2J1ntXOt_Dkp7wzxHwTc1pbJDLTunp-11aeNUIqaKnlBtWsIgf_49wANKA" alt="" />
    </div>
    <div>
      ava+description
    </div>
    <Myposts />
  </div>;
}

export default Profile;