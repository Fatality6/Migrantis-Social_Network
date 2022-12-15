import React from 'react';
import style from './formsControls.module.css';

export const Textarea = ({ input, meta, ...props }) => {
    const error = meta.touched && meta.error;
    return (
        <div className={style.formControl + ' ' + (error ? style.error : '')}>
            <textarea {...input} {...props} />
            {error && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({ input, meta, ...props }) => {
    const error = meta.touched && meta.error;
    return (
        <div className={style.formControl + ' ' + (error ? style.error : '')}>
            <input {...input} {...props} />
            {error && <span>{meta.error}</span>}
        </div>
    )
}