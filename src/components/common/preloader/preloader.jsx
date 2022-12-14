import React from "react";
import preloader from "./../../../img/load.gif";
import style from './preloader.module.css';

const Preloader = () => {
    return (
        <div className={style.preloader}>
            <img src={preloader} alt='' />
        </div>
    )
}

export default Preloader;