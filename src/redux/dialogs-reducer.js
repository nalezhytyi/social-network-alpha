const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messagesArray: [
        { id: 1, message: 'HI' },
        { id: 2, message: 'hello' },
        { id: 3, message: 'who is that' },
        { id: 4, message: 'wtf' },
        { id: 5, message: 'lol' },
        { id: 6, message: 'mama' },
    ],
    dialogsArray: [
        { id: 1, name: 'Andre' },
        { id: 2, name: 'Sam' },
        { id: 3, name: 'Phil' },
        { id: 4, name: 'Olga' },
        { id: 5, name: 'Eugen' },
        { id: 6, name: 'Nicolas' }
    ]
};

const dialogsReducer = (state = initialState, action) => {
    if (action.type === SEND_MESSAGE) {
        let body = action.newMessageBody;
        return {
            ...state,
            messagesArray: [...state.messagesArray, { id: 6, message: body }]
        };
    } else {
        return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;
