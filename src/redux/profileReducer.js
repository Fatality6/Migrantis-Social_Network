const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: '1', message: 'Hi world!', likes: 15 },
        { id: '2', message: 'how are you?', likes: 20 },
        { id: '3', message: 'Where are you?', likes: 17 }
    ],
    info:
        { name: 'Олег', years: '34 года', major: 'программист', avatar: 'http://sun9-70.userapi.com/s/v1/if1/nr1D3bBwxix54uj0ylejhuhj40UynsY_AgsKXjl73keyoznveM04--etVqI83NuTPoCkGhcX.jpg?size=200x200&quality=96&crop=0,0,480,480&ava=1' },
    newPostText: ''

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likes: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state};
            stateCopy.newPostText = action.text;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreater = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreater = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text
});

export default profileReducer;