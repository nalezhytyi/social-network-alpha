import React from "react";
import s from "./ProfileInfo.module.css";
import {ThumbDown, ThumbUp} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";


const ProfileData = ({profile}) => {
    return (
        <div className={s.profile__description}>
            <div className={s.aboutMe}>
                <Typography noWrap className={s.info__label} gutterBottom>Looking for a job :</Typography>
                {profile.lookingForAJob ?
                    <Typography color='textSecondary'><ThumbUp/></Typography> :
                    <Typography color='textSecondary'><ThumbDown/></Typography>}
            </div>
            {profile.lookingForAJobDescription &&
            <div className={s.aboutMe}>
                <Typography noWrap className={s.info__label} gutterBottom>Professional skills :</Typography>
                <Typography color='textSecondary'>{profile.lookingForAJobDescription}</Typography>
            </div>}
            {profile.aboutMe &&
            <div className={s.aboutMe}>
                <Typography noWrap className={s.info__label} gutterBottom>About me :</Typography>
                <Typography className={s.info__text} color='textSecondary'>{profile.aboutMe}</Typography>
            </div>}
        </div>
    )
};


export default ProfileData
