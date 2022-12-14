import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { getAuth, setAuthUserData, setUser } from '../../redux/authReducer';
import { compose } from 'redux';
import { AuthAPI } from '../../api/api';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuth();
    }

    render() {
        return <Header {...this.props} />
    }
}

const del = () => {
    AuthAPI.exit();
}

let mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, { setAuthUserData, setUser, getAuth, del })
)(HeaderContainer);

