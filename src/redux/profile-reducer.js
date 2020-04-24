import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SET_IS_FOLLOWED = 'SET_IS_FOLLOWED';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';




let initialState = {
    posts: [
        {
            id: 1, message: '“Live as if you were to die tomorrow. Learn as if you were to live forever.”\n' +
                '\n' +
                '– Mahatma Gandhi', like: '20'
        },
        {
            id: 2, message: ' “That which does not kill us makes us stronger.”\n' +
                '\n' +
                '– Friedrich Nietzsche', like: '221'
        },
        {
            id: 3,
            message: '“Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.”\n' +
                '\n' +
                '– Bernard M. Baruch',
            like: '33'
        },
        {
            id: 4, message: '“If opportunity doesn’t knock, build a door.”\n' +
                '\n' +
                '– Milton Berle', like: '1'
        }
    ],
    profile: null,
    status: "",
    isFetching: true,
    followed: null,

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostBody,
                like: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state, posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        }

        case SET_IS_FOLLOWED: {
            return {
                ...state,
                followed: action.followed
            }
        }

        default:
            return state;
    }
};
//action creators
export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
export const setFollowed = (followed) => ({type: SET_IS_FOLLOWED, followed});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});


//thunk creators
export const getIsFollowed = (userId) => async (dispatch) => {
    let response = await profileAPI.getIsFollowed(userId);
    dispatch(setFollowed(response.data));
};

export const getUserProfile = (userId) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await usersAPI.getUserProfile(userId);
    dispatch(setUserProfile(response.data));
    dispatch(toggleIsFetching(false));

};
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (error) {
        //alert(dispatch)
    }
};
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0]);
    }
};

export default profileReducer;
