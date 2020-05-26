import React from "react";
import s from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import { Avatar, Typography } from "@material-ui/core";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialogItem}>
            <NavLink to={path} className={s.dialogName} activeClassName={s.active}>
                <Avatar alt="User photo" src={null} />
                <Typography color='textSecondary'>
                    {props.name}
                </Typography>
            </NavLink>
        </div>
    )
}

export default DialogItem;
