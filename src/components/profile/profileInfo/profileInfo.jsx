import React from 'react';
import Preloader from '../../common/preloader/preloader';
import style from "./profileInfo.module.css";
import photoUser from '../../../img/user.png';
import ProfileStatus from './profileStatus';



class ProfileInfo extends React.Component {

  onMainPhotoSelected = (e) => {
    if(e.target.files.length){
      this.props.savePhoto(e.target.files[0])
    }
  }

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
        {this.props.isOwner && <input type={'file'} onChange={this.onMainPhotoSelected}/>}
      </div>);
  }
}

export default ProfileInfo;