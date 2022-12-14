import { connect } from 'react-redux';
import { compose } from 'redux';
import { addPost } from '../../../redux/profileReducer';
import Myposts from './myposts';


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    profile: state.profilePage.profile
  }
}

export default compose(
  connect(mapStateToProps, { addPost })
)(Myposts);