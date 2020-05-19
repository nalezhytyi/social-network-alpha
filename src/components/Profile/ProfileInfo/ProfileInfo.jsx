import React, { useState } from "react";
import s from "./ProfileInfo.module.css"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import ProfilePhoto from "./ProfilePhoto";
import ProfileData from "./ProfileData";
import { Card, Grid, CardContent, Typography, Button, Dialog, Grow } from "@material-ui/core";
import ProfileContacts from "./ProfileContacts";


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile, follow, unfollow, followed, followingInProgress, logout }) => {

    const [editMode, setEditMode] = useState(false);

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        })
    };
    return (
        <Card>
            <CardContent>
                <Grid container spacing={1} direction="row">
                    <Grid lg={1} />
                    <Grid item xs={12} md={6} lg={5} className={s.profile__firstItem}>
                        <CardContent>
                            <ProfilePhoto profile={profile} isOwner={isOwner} savePhoto={savePhoto} />
                        </CardContent>
                        <CardContent>
                            <ProfileContacts profile={profile} />
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} md={6} lg={5}>
                        <CardContent>
                            <Typography gutterBottom variant='h3'>
                                {profile.fullName}
                            </Typography>
                            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner} />
                        </CardContent>
                        <CardContent>
                            {isOwner ?
                                <div>
                                    <Button disableElevation variant="contained"
                                            onClick={() => {
                                                setEditMode(true)
                                            }} disabled={editMode}>Edit Profile</Button>
                                </div>
                                :
                                <div className={s.buttonContainer}>
                                    {followed &&
                                    <Button className={s.button} disableElevation color="secondary" variant="contained"
                                            disabled={followingInProgress.some(id => id === profile.userId)}
                                            onClick={() => {
                                                unfollow(profile.userId);
                                            }}>
                                        Unfollow
                                    </Button>}
                                    {!followed &&
                                    <Button className={s.button} disableElevation color="primary" variant="contained"
                                            disabled={followingInProgress.some(id => id === profile.userId)}
                                            onClick={() => {
                                                follow(profile.userId);
                                            }}>
                                        Follow
                                    </Button>}
                                </div>}
                        </CardContent>
                        <CardContent>
                            {editMode ?
                                <Dialog TransitionComponent={Grow}
                                        mountOnEnter
                                        open={editMode} onClose={() => {
                                    setEditMode(false)
                                }}><ProfileDataForm logout={logout} cancelEditMode={() => {
                                    setEditMode(false)
                                }} initialValues={profile} profile={profile} onSubmit={onSubmit} /></Dialog> :
                                <ProfileData profile={profile} isOwner={isOwner} />}
                        </CardContent>
                    </Grid>
                    <Grid lg={1} />
                </Grid>
            </CardContent>
        </Card>
    );
};


export default ProfileInfo;
