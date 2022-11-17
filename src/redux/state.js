let state = {
    profilePage: {
        posts: [
            { id: '1', message: 'Hi world!', likes: 15 },
            { id: '2', message: 'how are you?', likes: 20 },
            { id: '3', message: 'Where are you?', likes: 17 }
        ]
    },
    messagesPage: {
        dialogs: [
            { id: '1', name: 'Иван' },
            { id: '2', name: 'Андрей' },
            { id: '3', name: 'Олег' },
            { id: '4', name: 'Игорь' },
            { id: '5', name: 'Игорян' },
            { id: '6', name: 'Ксения' }
        ],
        messages: [
            { id: '1', message: 'Hi hi hi!' },
            { id: '2', message: 'how are you?' },
            { id: '3', message: 'Where are you?' }
        ]
    }
}

export default state;