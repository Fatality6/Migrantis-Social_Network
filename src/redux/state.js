let store = {
    _state: {
        profilePage: {
            posts: [
                { id: '1', message: 'Hi world!', likes: 15 },
                { id: '2', message: 'how are you?', likes: 20 },
                { id: '3', message: 'Where are you?', likes: 17 }
            ],
            info:
                { name: 'Олег', years: '34 года', major: 'программист', avatar: 'http://sun9-70.userapi.com/s/v1/if1/nr1D3bBwxix54uj0ylejhuhj40UynsY_AgsKXjl73keyoznveM04--etVqI83NuTPoCkGhcX.jpg?size=200x200&quality=96&crop=0,0,480,480&ava=1' },
            newPostText: ''
    
        },
        messagesPage: {
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
        },
        sideBar: {
            friends: [
                { id: '1', name: 'Иван', avatar: 'https://avatars.mds.yandex.net/i?id=7bebe2b238ac44e7b942dc67fa0a1bce_sr-5562949-images-thumbs&n=13' },
                { id: '2', name: 'Вова', avatar: 'https://avatars.mds.yandex.net/i?id=15ef3d4245619b6e2a417f23da773b1f-4298597-images-thumbs&n=13' },
                { id: '3', name: 'Олег', avatar: 'https://avatars.mds.yandex.net/i?id=2a00000179e5ed837734fb077c52ae25a3a4-4599578-images-thumbs&n=13' }
            ]
        }
    },
    _callsubscriber(){
        
    },
    getState(){
        return this._state;
    },
    addPost() {
        let newPost = {
            id: this._state.profilePage.posts.length + 1,
            message: this._state.profilePage.newPostText,
            likes: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callsubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callsubscriber(this._state);
    },
    addMessage(newMessageText) {
        let newMessage = {
            id: this._state.messagesPage.messages.length + 1,
            message: newMessageText
        };
        this._state.messagesPage.messages.push(newMessage);
        this._callsubscriber(this._state);
    },
    subscribe(observer) {
        this._callsubscriber = observer;
    }
}

export default store;
window.store = store;