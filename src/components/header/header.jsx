import React from 'react';
import style from './header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <img src='https://www.weareallmigrants.eu/wp-content/uploads/2017/03/LOGO-migrants.jpg' alt="" />
            <div className={style.name}>Migrantis</div>
        </header>);
}

export default Header;