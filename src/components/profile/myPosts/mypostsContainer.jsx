import { connect } from 'react-redux';
import { compose } from 'redux';
import { addPost, updateNewPostText } from '../../../redux/profileReducer';
import Myposts from './myposts';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    avatar: state.profilePage.info.avatar
  }
}

export default compose(
  connect(mapStateToProps, {updateNewPostText, addPost})
)(Myposts);