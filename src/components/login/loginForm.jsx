import React from 'react';
import { Field } from 'redux-form';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='логин' name={'email'} component={'input'} />
            </div>
            <div>
                <Field placeholder='пароль' name={'password'} component={'input'} />
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type="checkbox" /> запомнить меня
            </div>
            <div>
                <button>Войти</button>
            </div>
        </form>
    )
}

export default LoginForm;