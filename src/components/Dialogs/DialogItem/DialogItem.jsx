import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <CardContent className={s.dialogItem}>
            <NavLink to={path} className={s.dialogName} activeClassName={s.active}>
                <Avatar alt="" src={null}/>
                <Typography color='textSecondary'>{props.name}</Typography>
            </NavLink>
        </CardContent>
};
export default DialogItem;