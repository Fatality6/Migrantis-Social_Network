import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { setAuthUserData, setUser } from '../../redux/authReducer';
import { UsersAPI } from '../../api/api';

class HeaderContainer extends React.Component {

    componentDidMount() {

        UsersAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, login, email } = data.data;
                    this.props.setAuthUserData(id, email, login);
                    UsersAPI.getProfile(id)
                        .then(data => {
                            this.props.setUser(data);
                        }
                        )
                }
            })
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { setAuthUserData, setUser })(HeaderContainer);