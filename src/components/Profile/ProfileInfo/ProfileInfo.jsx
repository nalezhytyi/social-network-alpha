import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profile__info}>
            <div className={s.profile__photo}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}
                     alt=""/>
            </div>
            <div className={s.profile__description}>
                <h2>{props.profile.fullName}</h2>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <p>About me: {props.profile.aboutMe}</p>
                <div className={s.contacts}>
                    <h4>Contacts:</h4>
                    <div className={s.facebook}>
                        {props.profile.contacts.facebook}
                    </div>
                    <div className={s.website}>
                        {props.profile.contacts.website}
                    </div>
                    <div className={s.vk}>
                        {props.profile.contacts.vk}
                    </div>
                    <div className={s.twitter}>
                        {props.profile.contacts.twitter}
                    </div>
                    <div className={s.instagram}>
                        {props.profile.contacts.instagram}
                    </div>
                    <div className={s.youtube}>
                        {props.profile.contacts.youtube}
                    </div>
                    <div className={s.github}>
                        {props.profile.contacts.github}
                    </div>
                    <div className={s.mainlink}>
                        {props.profile.contacts.mainLink}
                    </div>
                </div>
                <div className={s.job__search}>
                    <div>Looking for a job: {props.profile.lookingForAJob}</div>
                    <div>Description: {props.profile.lookingForAJobDescription}</div>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;
