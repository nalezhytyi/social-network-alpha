import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello', like: '20'},
                {id: 2, message: 'hi', like: '221'},
                {id: 3, message: 'hi', like: '33'},
                {id: 4, message: 'hi', like: '1'}
            ],
            newPostText: ''

        },
        dialogsPage: {
            messagesArray: [
                {id: 1, message: 'HI'},
                {id: 2, message: 'HOIHI'},
                {id: 3, message: 'HSJHBAJI'},
                {id: 4, message: 'HSSI'},
                {id: 5, message: 'HSFCI'},
                {id: 6, message: 'HASDAI'},
            ],
            dialogsArray: [
                {id: 1, name: 'Andrii'},
                {id: 2, name: 'Yyrii'},
                {id: 3, name: 'Kirill'},
                {id: 4, name: 'Olha'},
                {id: 5, name: 'Eugen'},
                {id: 6, name: 'Kolya'}
            ],
            newMessageBody: ''

        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state was changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
            this._state.profilePage = profileReducer(this._state.profilePage, action);
            this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
            this._state.sidebar = sidebarReducer(this._state.sidebar, action);

            this._callSubscriber(this._state);
    }

};



export default store;
window.store = store;
