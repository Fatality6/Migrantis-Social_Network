const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        { id: '1', name: 'Иван', avatar: 'https://avatars.mds.yandex.net/i?id=7bebe2b238ac44e7b942dc67fa0a1bce_sr-5562949-images-thumbs&n=13' },
        { id: '2', name: 'Вова', avatar: 'https://avatars.mds.yandex.net/i?id=15ef3d4245619b6e2a417f23da773b1f-4298597-images-thumbs&n=13' },
        { id: '3', name: 'Олег', avatar: 'https://avatars.mds.yandex.net/i?id=2a00000179e5ed837734fb077c52ae25a3a4-4599578-images-thumbs&n=13' },
        { id: '4', name: 'Игорь', avatar: 'https://avatars.mds.yandex.net/i?id=9544e337abd0163477c7dca86d209950_sr-5538868-images-thumbs&n=13' },
        { id: '5', name: 'Игорян', avatar: 'https://avatars.mds.yandex.net/i?id=b90dfe513912b4894977640a78fe8990-5221698-images-thumbs&n=13' },
        { id: '6', name: 'Ксения', avatar: 'https://avatars.mds.yandex.net/i?id=8094adf60f703f023586e3eb6303e2fb-4358711-images-thumbs&n=13' }
    ],
    messages: [
        { id: '1', message: 'Hi hi hi!' },
        { id: '2', message: 'Hi! How are you?' },
        { id: '3', message: 'I`m fine. Thanks!' },
        { id: '4', message: 'Where are you?' }
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: action.message.message
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }

        default:
            return state;
    }
}

export const addMessage = (message) => ({ type: ADD_MESSAGE, message });

export default dialogsReducer;