import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog}>
        <img className={s.dialogItemAvatar} src="https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg" alt=""/>
        <NavLink to={path} className={s.dialogName} activeClassName={s.active}>
            {props.name}
        </NavLink>
    </div>
}
export default DialogItem;