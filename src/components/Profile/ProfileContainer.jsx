import React from "react";
import s from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatus,
    getUserProfile,
    savePhoto,
    saveProfile,
    updateStatus
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {follow, getIsFollowed, toggleIsFollowingProgress, unfollow} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
        this.props.getIsFollowed(userId)
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }


    render() {
        debugger
        return (
            <div className={s.profile}>
                {this.props.isFetching ?
                    <Preloader/>
                    :
                    <Profile {...this.props}
                             savePhoto={this.props.savePhoto}
                             isOwner={!this.props.match.params.userId}
                             profile={this.props.profile}
                             status={this.props.status}
                             updateStatus={this.props.updateStatus}
                             follow={this.props.follow}
                             unfollow={this.props.unfollow}
                             followingInProgress={this.props.followingInProgress}
                             followed={this.props.followed}
                             isFetching={this.props.isFetching}
                             getIsFollowed={this.props.getIsFollowed}
                    />}
            </div>
        );
    };
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    followingInProgress: state.usersPage.followingInProgress,
    followed: state.usersPage.followedProfile,
    isFetching: state.profilePage.isFetching
});

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, toggleIsFollowingProgress,
        getUserProfile, getStatus, updateStatus, savePhoto, saveProfile, getIsFollowed
    }),
    withRouter,
    withAuthRedirect)
(ProfileContainer)
