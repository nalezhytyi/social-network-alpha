import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
  getStatus,
  getUserProfile,
  savePhoto,
  saveProfile,
  updateStatus,
} from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import {
  follow,
  getIsFollowed,
  toggleIsFollowingProgress,
  unfollow,
} from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import { logout } from '../../redux/auth-reducer';

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push('/login');
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
    this.props.getIsFollowed(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    const { isFetching, match } = this.props;
    return (
      <div>
        {isFetching ? <Preloader /> : <Profile {...this.props} isOwner={!match.params.userId} />}
      </div>
    );
  }
}

let mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
  followingInProgress: state.usersPage.followingInProgress,
  followed: state.usersPage.followedProfile,
  isFetching: state.profilePage.isFetching,
});

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    toggleIsFollowingProgress,
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
    getIsFollowed,
    logout,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
