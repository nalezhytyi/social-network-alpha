import preloader from "../../../assets/images/preload.svg";
import React from "react";
import s from "../Preloader/Preloader.module.css"


let Preloader = () => {
    return <div className={s.preloader}><img src={preloader} alt='loading' /></div>
};

export default Preloader
