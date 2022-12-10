let initialState = {
    friends: [
        { id: '1', name: 'Иван', avatar: 'https://avatars.mds.yandex.net/i?id=7bebe2b238ac44e7b942dc67fa0a1bce_sr-5562949-images-thumbs&n=13' },
        { id: '2', name: 'Вова', avatar: 'https://avatars.mds.yandex.net/i?id=15ef3d4245619b6e2a417f23da773b1f-4298597-images-thumbs&n=13' },
        { id: '3', name: 'Олег', avatar: 'https://avatars.mds.yandex.net/i?id=2a00000179e5ed837734fb077c52ae25a3a4-4599578-images-thumbs&n=13' }
    ]
};

const sideBarReducer = (state = initialState) => {

    return state;
}

export default sideBarReducer;