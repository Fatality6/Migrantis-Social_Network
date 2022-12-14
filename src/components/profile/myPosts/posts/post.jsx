import React from 'react';
import Preloader from '../../../common/preloader/preloader';
import style from './post.module.css';
import photoUser from './../../../../img/user.png';

class Posts extends React.Component{ 

  render() {
    if (this.props.profile == null) {
      return <Preloader />
    }

    return (
    <div>
      <div className={style.item}>
        <img src={this.props.profile.photos.small ? this.props.profile.photos.small : photoUser } alt='' />
        <span className={style.text}>{this.props.message}</span>
      </div>
      <div>
        <span>Like: {this.props.likes}</span>
      </div>
    </div>);
}
}

export default Posts;