import React from 'react';
import Profile from './profile';
import { getProfile, updateStatus, getStatus } from './../../redux/profileReducer';
import { connect } from 'react-redux';
/* import { withAuthRedirect } from '../../hoc/withAuthRedirect'; */
import { compose } from 'redux';
import { withRouter } from '../common/withRouter/withRouter';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId;
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {

    return (
      <div>
        <Profile {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus} />
      </div>
    );
  }

};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
});

export default compose(
  connect(mapStateToProps, { getProfile, updateStatus, getStatus }),
  withRouter
  /* withAuthRedirect пока плохо работает*/
)(ProfileContainer);