import React, {useEffect, useState} from "react";
import s from "./ProfileInfo.module.css"
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
       setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true)
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    };
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };

    return (
        <div>
            {!editMode &&
            <Typography variant='h6' color='textSecondary' className={s.status}>
                 <span onClick={props.isOwner && activateEditMode}>{props.status || "no status"}</span>
            </Typography>
            }
            {editMode &&
            <Typography className={s.status__input}>
                <TextField helperText='Click anywhere to save your new status' fullWidth size='small' onChange={onStatusChange} value={status} autoFocus={true} onBlur={deactivateEditMode} label="Status :" id="standard-textarea"/>
            </Typography>
            }
        </div>
    )
};


export default ProfileStatusWithHooks;

