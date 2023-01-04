import React from 'react'
import { Field } from 'redux-form'
import { maxLength30, required } from '../../utils/validators/validators'
import { Input } from '../common/FormsControl/FormsControls'
import style from './login.module.css'

const LoginForm = ({handleSubmit, error, captcha}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder='логин' name={'email'} component={Input} validate={[ required, maxLength30 ]} />
            </div>
            <div>
                <Field placeholder='пароль' name={'password'} component={Input} type={'password'} validate={[ required, maxLength30 ]} />
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type="checkbox" /> запомнить меня
            </div>
            <div className={style.formError}>{error}</div>
            {captcha && 
            <div>
                <img src={captcha} alt='captcha'/>
            </div>}
            {captcha && 
            <div>
                <Field placeholder='captcha' name={'captcha'} component={Input} validate={[required]} />
            </div>}
            <div>
                <button>Войти</button>
            </div>
        </form>
    )
}

export default LoginForm;