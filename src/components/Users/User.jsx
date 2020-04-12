import React from "react";
import s from "./User.module.css";
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";


let User = ({user, follow, unfollow, followingInProgress}) => {
    return (
        <div className={s.users__child}>
            <div className={s.user__child_photo}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""/>
                </NavLink>
            </div>
            <div className={s.users__child_name}>
                {user.name}
            </div>
            <div className={s.user__child_status}>
                <p>{user.status}</p>
            </div>
            <div>
                {user.followed ?
                    <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id);
                    }}>Unfollow</button>
                    :
                    <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id);
                    }}>Follow</button>
                }
            </div>
        </div>
    )
};

export default User;

