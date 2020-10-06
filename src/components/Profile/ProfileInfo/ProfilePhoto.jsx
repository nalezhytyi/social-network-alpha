import React from 'react';
import cn from 'classnames';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfilePhoto = ({ isOwner, profile, savePhoto }) => {
  const onMainPhotoSelected = e => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={cn({ [s.ownerPhoto]: isOwner }, s.photo)}>
      <img src={profile.photos.large != null ? profile.photos.large : userPhoto} alt='User' />
      {isOwner && (
        <div className={s.ownerPhoto__upload}>
          <label>
            <input className={s.ownerPhoto_input} type={'file'} onChange={onMainPhotoSelected} />
            <FontAwesomeIcon className={s.ownerPhoto__upload_icon} icon='upload' />
          </label>
        </div>
      )}
    </div>
  );
};

export default ProfilePhoto;
