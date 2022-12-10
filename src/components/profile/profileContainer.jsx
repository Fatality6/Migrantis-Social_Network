import React from 'react';
import Profile from './profile';
import { getProfile } from './../../redux/profileReducer';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
/* import { withAuthRedirect } from '../../hoc/withAuthRedirect'; */
import { compose } from 'redux';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId;
    this.props.getProfile(userId)
  }

  render() {

    return (
      <div>
        <Profile {...this.props} 
        profile={this.props.profile}
        status={this.props.status} />
      </div>
    );
  }

};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default compose(
  connect(mapStateToProps, { getProfile }),
  withRouter
  /* withAuthRedirect пока плохо работает*/
)(ProfileContainer);