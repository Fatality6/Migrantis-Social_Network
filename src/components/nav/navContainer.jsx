import React from 'react'
import { connect } from 'react-redux'
import Nav from './nav'
import { compose } from 'redux'



class NavContainer extends React.Component {

    render() {
        return <Nav {...this.props} />
    }
}


let mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    profile: state.profilePage.profile
})

export default compose(
    connect(mapStateToProps, {})
)(NavContainer)

