const SET_DRAWER = 'SET_DRAWER';

let initialState = {
    drawer: false
};

const sidebarReducer = (state = initialState, action) => {

    if (action.type === SET_DRAWER) {
        if (state.drawer === false) {
            return {
                ...state,
                drawer: true
            }
        }
        return {
            ...state,
            drawer: false
        }
    } else {
        return state;
    }
};

export const setDrawer = () => ({ type: SET_DRAWER });

export default sidebarReducer;
