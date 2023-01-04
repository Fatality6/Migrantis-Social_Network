import { stopSubmit } from "redux-form"
import { ProfileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCES = 'SAVE_PHOTO_SUCCES'

let initialState = {
    posts: 
        [
            { id: '1', message: 'Hi world!', likes: 15 },
            { id: '2', message: 'how are you?', likes: 20 },
            { id: '3', message: 'Where are you?', likes: 17 }
        ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: action.post.post,
                likes: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }

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

        case SAVE_PHOTO_SUCCES:
            return {
                ...state,
                profile: { ...state.profile, photos:action.photos}
            }

        default:
            return state
    }
}

export const addPost = (post) => ({ type: ADD_POST, post })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCES, photos})


//=====thunks=======
export const getProfile = (userId) => async (dispatch) => {
    const data = await ProfileAPI.getProfile(userId)
            dispatch(setUserProfile(data))
}

export const getStatus = (userId) => async (dispatch) => {
    const data = await ProfileAPI.getStatus(userId)
            dispatch(setStatus(data))
}

export const updateStatus = (status) => async (dispatch) => {
    const data = await ProfileAPI.updateStatus(status)
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
}

export const savePhoto = (file) => async (dispatch) => {
    const data = await ProfileAPI.savePhoto(file)
            if (data.resultCode === 0) {
                dispatch(savePhotoSuccess(data.data.photos))
            }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const data = await ProfileAPI.saveProfile(profile)
            if (data.data.resultCode === 0) {
                dispatch(getProfile(userId))
            }
            else{
                dispatch(stopSubmit('profile', {_error:data.data.messages[0]}))
                return Promise.reject(data.data.messages[0])
            }
}

export default profileReducer