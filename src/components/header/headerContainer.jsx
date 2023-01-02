import React from 'react'
import { connect } from 'react-redux'
import Header from './header'
import { logout } from '../../redux/authReducer'
import { compose } from 'redux'


class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} />
    }
}


let mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, { logout })
)(HeaderContainer)

