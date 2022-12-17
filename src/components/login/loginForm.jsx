import React from 'react'
import { Field } from 'redux-form'
import { maxLength30, required } from '../../utils/validators/validators'
import { Input } from '../common/FormsControl/FormsControls'
import style from './login.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='логин' name={'email'} component={Input} validate={[ required, maxLength30 ]} />
            </div>
            <div>
                <Field placeholder='пароль' name={'password'} component={Input} type={'password'} validate={[ required, maxLength30 ]} />
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type="checkbox" /> запомнить меня
            </div>
            <div className={style.formError}>{props.error}</div>
            <div>
                <button>Войти</button>
            </div>
        </form>
    )
}

export default LoginForm;