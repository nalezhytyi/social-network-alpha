import React, {useEffect, useState} from "react";
import s from "./ProfileInfo.module.css"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import ProfilePhoto from "./ProfilePhoto";
import ProfileData from "./ProfileData";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ProfileContacts from "./ProfileContacts";
import Dialog from "@material-ui/core/Dialog";
import Grow from "@material-ui/core/Grow";



const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile, follow, unfollow, followed, getIsFollowed, followingInProgress }) => {

    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        getIsFollowed(profile.userId)
    });

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        })
    };
debugger
    return (
        <Card className={s.profile__info_container}>
            <CardContent>
                <Grid container spacing={1} direction="row">
                    <Grid lg={1}/>
                    <Grid item xs={12} md={6} lg={5} className={s.profile__firstItem}>
                        <CardContent>
                            <ProfilePhoto profile={profile} isOwner={isOwner} savePhoto={savePhoto}/>
                        </CardContent>
                        <CardContent>
                            <ProfileContacts profile={profile}/>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} md={6} lg={5}>
                        <CardContent>
                            <Typography gutterBottom variant='h3'>
                                {profile.fullName}
                            </Typography>
                            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner}/>
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
                                <div>
                                    {followed &&
                                    <Button disableElevation color="secondary" variant="contained"
                                            disabled={followingInProgress.some(id => id === profile.userId)}
                                            onClick={() => {
                                                unfollow(profile.userId);
                                            }}>
                                        Unfollow
                                    </Button>}
                                    {!followed &&
                                    <Button disableElevation color="primary" variant="contained"
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
                                }}><ProfileDataForm cancelEditMode={() => {
                                    setEditMode(false)
                                }} initialValues={profile} profile={profile} onSubmit={onSubmit}/></Dialog> :
                                <ProfileData profile={profile} isOwner={isOwner}/>}
                        </CardContent>
                    </Grid>
                    <Grid lg={1}/>
                </Grid>
            </CardContent>
        </Card>
    );
};


export default ProfileInfo;
