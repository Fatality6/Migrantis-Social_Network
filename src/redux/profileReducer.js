import { UsersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: '1', message: 'Hi world!', likes: 15 },
        { id: '2', message: 'how are you?', likes: 20 },
        { id: '3', message: 'Where are you?', likes: 17 }
    ],
    info:
        { name: 'Олег', years: '34 года', major: 'программист', avatar: 'http://sun9-70.userapi.com/s/v1/if1/nr1D3bBwxix54uj0ylejhuhj40UynsY_AgsKXjl73keyoznveM04--etVqI83NuTPoCkGhcX.jpg?size=200x200&quality=96&crop=0,0,480,480&ava=1' },
    newPostText: '',
    profile: null,
    status: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likes: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;
    }
}

export const addPost = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const updateNewPostText = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text
});

//=====thunks=======
export const getProfile = (userId) => (dispatch) => {
    if (!userId) {
        userId = '27001';
    };

    UsersAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        });

    UsersAPI.getStatus(userId)
    .then(data => {
        dispatch(setStatus(data));
    });
}

export default profileReducer;