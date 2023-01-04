import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import { login } from '../../redux/authReducer'
import LoginForm from './loginForm'


const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = ({login, isAuth, captcha}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (isAuth) {
        return <Navigate to='/profile' />
    }

    return (
        <div>
            <h1>Вход</h1>
            <LoginReduxForm onSubmit={onSubmit} captcha={captcha}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login })(Login)