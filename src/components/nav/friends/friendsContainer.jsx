import Friends from './friends';
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    state: state.sideBar.friends
  }
}

export default compose(
  connect(mapStateToProps)
)(Friends);