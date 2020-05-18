import React from "react";
import s from "./User.module.css";
import userPhoto from '../../assets/images/avatar.png'
import { NavLink } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


let User = ({ user, follow, unfollow, followingInProgress }) => {
    return (
        <Card className={s.users__child}>
            <div className={s.user__child_photo}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="" />
                </NavLink>
                <Typography className={s.users__child_name}>
                    {user.name}
                </Typography>
                <div className={s.user__child_status}>
                    <p>{user.status}</p>
                </div>
            </div>

            <div className={s.followed__container}>
                {user.followed ?
                    <Button className={s.button} disableElevation color="secondary" variant="contained"
                            disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id);
                    }}>Unfollow</Button>
                    :
                    <Button className={s.button} disableElevation color="primary" variant="contained"
                            disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id);
                    }}>Follow</Button>
                }
            </div>

        </Card>
    )
};

export default User;

