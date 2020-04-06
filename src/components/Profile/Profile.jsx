import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = React.memo(props => {
    return <div className={s.profile}>
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
        </div>
        <div>
            <MyPostsContainer/>
        </div>
    </div>
});

export default Profile;
