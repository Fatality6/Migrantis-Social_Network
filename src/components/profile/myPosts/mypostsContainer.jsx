import { connect } from 'react-redux';
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../redux/profileReducer';
import Myposts from './myposts';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    avatar: state.profilePage.info.avatar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreater(text))
    },

    addPost: () => {
      dispatch(addPostActionCreater())
    }

  }
}

const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default MypostsContainer;