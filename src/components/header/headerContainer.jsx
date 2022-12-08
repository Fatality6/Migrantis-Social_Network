import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { getAuth, setAuthUserData, setUser } from '../../redux/authReducer';


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuth();
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { setAuthUserData, setUser, getAuth })(HeaderContainer);