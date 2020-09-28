import React from 'react';
import s from './User.module.css';
import userPhoto from '../../assets/images/avatar.png';
import { NavLink } from 'react-router-dom';
import { Card, Button, Typography } from '@material-ui/core';

let User = ({ user, follow, unfollow, followingInProgress }) => {
  return (
    <Card className={s.user}>
      <div className={s.userInfo}>
        <NavLink to={'/profile/' + user.id}>
          <img
            src={user.photos.small != null ? user.photos.small : userPhoto}
            alt='User'
          />
          <Typography className={s.userName}>{user.name}</Typography>
          <Typography className={s.userStatus}>{user.status}</Typography>
        </NavLink>
      </div>
      <div className={s.followed}>
        {user.followed ? (
          <Button
            className={s.button}
            disableElevation
            color='secondary'
            variant='contained'
            disabled={followingInProgress.some(id => id === user.id)}
            onClick={() => unfollow(user.id)}
          >
            Unfollow
          </Button>
        ) : (
          <Button
            className={s.button}
            disableElevation
            color='primary'
            variant='contained'
            disabled={followingInProgress.some(id => id === user.id)}
            onClick={() => follow(user.id)}
          >
            Follow
          </Button>
        )}
      </div>
    </Card>
  );
};

export default User;
