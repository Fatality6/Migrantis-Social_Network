import Friends from './friends';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    state: state.sideBar.friends
  }
}

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;