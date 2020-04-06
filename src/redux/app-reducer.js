import {isUserAuth} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    if (action.type === INITIALIZED_SUCCESS) {
        return {
            ...state,
            initialized: true
        };
    } else {
        return state;
    }
};


export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

//thunk creators
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(isUserAuth());
    promise.then(() => dispatch(initializedSuccess()))
};


export default appReducer;



