import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";



const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>

            <div>
                <ProfileInfo
                    saveProfile={props.saveProfile}
                    savePhoto={props.savePhoto}
                    isOwner={props.isOwner}
                    profile={props.profile}
                    status={props.status}
                    updateStatus={props.updateStatus}
                    users={props.users}
                    follow={props.follow}
                    unfollow={props.unfollow}
                    followingInProgress={props.followingInProgress}
                    followed={props.followed}
                    getIsFollowed={props.getIsFollowed}
                />
            <MyPostsContainer/>
        </div>
    </div>
};

export default Profile;
