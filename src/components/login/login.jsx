import React from 'react';
import { reduxForm } from 'redux-form';
import { AuthAPI } from '../../api/api';
import LoginForm from './loginForm';


const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = () => {
    const onSubmit = (formData) => {
        AuthAPI.authorize(formData);
    }

    return (
        <div>
            <h1>Вход</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;