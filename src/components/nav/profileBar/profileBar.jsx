import React from "react"
import { NavLink } from "react-router-dom";
import photoUser from '../../../img/user.png';
import style from './profileBar.module.css'

const ProfileBar = ({ profile, isAuth }) => {

    const nameClass = e => e.isActive ? style.avatar +' '+style.active : style.avatar;

    if (isAuth) {
        return <>
            <div className={style.wrapper}>
                <div className={style.link}>
                    
                        <div >
                            <NavLink to="/profile" className={nameClass}>
                                <img src={profile ? profile.photos.small : photoUser} alt='user' />
                            </NavLink>
                        </div>
                    
                </div>
                <div className={style.fullName}>{profile && profile.fullName}</div>
            </div>
        </>
    } else {
        return <>
            <div className={style.signIn}>
                <div>
                    <NavLink to={'/login'} >
                        <button className={style.btn}>Sign In</button>
                    </NavLink>
                </div>
            </div>
        </>
    }
}

export default ProfileBar