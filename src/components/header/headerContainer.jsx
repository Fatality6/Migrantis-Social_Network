import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Header from './header';
import { setAuthUserData, setUser } from '../../redux/authReducer';

class HeaderContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id, 
                    { withCredentials: true })
                        .then(response => {
                            this.props.setUser(response.data);
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