import { profileAPI, usersAPI } from "../api/api";
import { updateObjectInArray } from "../utilities/helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
const SET_IS_FOLLOWED = 'SET_IS_FOLLOWED';

let initialState = {
    users: [],
    pageSize: 18,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    followedProfile: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: true }),
                followedProfile: action.followedProfile
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: false }),
                followedProfile: action.followedProfile
            };
        case SET_USERS: {
            return {
                ...state, users: action.users
            };
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            };
        }
        case SET_USERS_TOTAL_COUNT: {
            return {
                ...state, totalUsersCount: action.count
            };
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            };
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        }
        case SET_IS_FOLLOWED: {
            return {
                ...state,
                followedProfile: action.followedProfile
            }
        }
        default:
            return state;
    }
};

export const followSuccess = (userId, followedProfile) => ({ type: FOLLOW, userId, followedProfile });
export const unfollowSuccess = (userId, followedProfile) => ({ type: UNFOLLOW, userId, followedProfile });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_USERS_TOTAL_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});
export const setFollowedProfile = (followedProfile) => ({ type: SET_IS_FOLLOWED, followedProfile });

//thunk creators
export const getIsFollowed = (userId) => async (dispatch) => {
    let response = await profileAPI.getIsFollowed(userId);
    dispatch(setFollowedProfile(response.data));
};

export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setUsersTotalCount(data.totalCount));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));
};

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
};

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
};


export default usersReducer;



