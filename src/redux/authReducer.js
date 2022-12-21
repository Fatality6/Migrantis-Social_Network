import { stopSubmit } from "redux-form"
import { AuthAPI, UsersAPI } from "../api/api"


const SET_USER_DATA = 'auth/SET_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, payload: { userId, email, login, isAuth }
})

//=====thunks=======
export const getAuth = () => async (dispatch) => {
    let data = await UsersAPI.getAuth()
            if (data.resultCode === 0) {
                let { id, login, email } = data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await AuthAPI.authorize(email, password, rememberMe)
            if (response.data.resultCode === 0) {
                dispatch(getAuth())
            } else if (response.data.resultCode === 10) {
                dispatch(stopSubmit('login', { _error: 'CAPCHA' }))
            } else {
                dispatch(stopSubmit('login', { _error: 'проверьте данные для входа' }))
            }
}

export const logout = () => async (dispatch) => {
    let response = await AuthAPI.exit()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
                dispatch(getAuth())
            }
}

export default authReducer;