import React, {useEffect, useState} from "react";
import s from "./ProfileInfo.module.css"


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
            <b>Status:</b>
            {!editMode &&
            <div className={s.status}>
                 <span onClick={props.isOwner && activateEditMode}>{props.status || "no status"}</span>
            </div>
            }
            {editMode &&
            <div className={s.status__input}>
                <input onChange={onStatusChange} value={status} autoFocus={true} onBlur={deactivateEditMode}/>
            </div>
            }
        </div>
    )
};


export default ProfileStatusWithHooks;

