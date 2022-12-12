import React from 'react';
import Preloader from '../../common/preloader/preloader';
import style from "./profileInfo.module.css";
import photoUser from './../../../img/user.png';
import ProfileStatus from './profileStatus';



class ProfileInfo extends React.Component {

  render() {

    if (this.props.profile == null) {
      return <Preloader />
    }

    return (
      <div className={style.content}>
        <div className={style.description}>
          <img src={this.props.profile.photos.large ? this.props.profile.photos.large : photoUser} alt='' />
          <div className={style.box}>
            <div className={style.text}>
              {this.props.profile.fullName}
            </div>
            <div className={style.text}>
              <ProfileStatus status={this.props.status} updateStatus={this.props.updateStatus} />
            </div>
            <div className={style.text}>
              {this.props.profile.lookingForAJobDescription}
            </div>
            <div className={style.text}>
              {this.props.profile.contacts.vk}
            </div>
          </div>
        </div>
      </div>);
  }
}

export default ProfileInfo;