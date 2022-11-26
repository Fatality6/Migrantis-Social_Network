const ADD_MESSAGE = 'ADD-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: action.text
            };
            state.messages.push(newMessage);
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreater = (text) => ({
    type: ADD_MESSAGE,
    text: text
});

export default dialogsReducer;