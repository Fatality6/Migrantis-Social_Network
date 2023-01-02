import React from 'react'
import Profile from './profile'
import { getProfile, updateStatus, getStatus, savePhoto, saveProfile } from './../../redux/profileReducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { withRouter } from '../common/withRouter/withRouter'
import { logout } from '../../redux/authReducer'

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.router.params.userId
    if(!userId){
      userId = this.props.authorizedUserId
         if(!userId){
          this.props.history.push('/login')
        } 
    }
    this.props.getProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps) {
    if(this.props.router.params.userId !== prevProps.router.params.userId)
    this.refreshProfile()
  }

  render() {

    return (
      <div>
        <Profile {...this.props}
          savePhoto={this.props.savePhoto}
          isOwner={!this.props.router.params.userId}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus} 
          logout={this.props.logout}
          saveProfile={this.props.saveProfile}
          />
      </div>
    )
  }

}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

export default compose(
  connect(mapStateToProps, { getProfile, updateStatus, getStatus, savePhoto, logout, saveProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)