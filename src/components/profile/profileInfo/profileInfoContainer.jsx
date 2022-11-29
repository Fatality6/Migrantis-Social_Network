import { connect } from 'react-redux';
import ProfileInfo from './profileInfo';

const mapStateToProps = (state) => {
  return {
    state: state.profilePage.info
  }
};

const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo);

export default ProfileInfoContainer;