import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.module.css';

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src='https://www.weareallmigrants.eu/wp-content/uploads/2017/03/LOGO-migrants.jpg' alt="" />
            <div className={style.login}>
                { props.isAuth ? props.login : <NavLink to={'/login'} >Войти</NavLink>}
                { props.isAuth ? <button onClick={props.del} >выйти</button> : null}
            </div>
            <div className={style.name}>Migrantis</div>
            
        </header>);
}

export default Header;