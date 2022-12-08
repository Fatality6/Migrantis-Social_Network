import { UsersAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER = 'SET_USER';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    user: []
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case SET_USER:
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({ 
    type: SET_USER_DATA, data: { userId, email, login } });
export const setUser = (user) => ({ type: SET_USER, user });

//=====thunks=======
export const getAuth = ()=>(dispatch) => {
    UsersAPI.getAuth()
        .then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data;
                dispatch (setAuthUserData(id, email, login));
                UsersAPI.getProfile(id)
                    .then(data => {
                        dispatch (setUser(data));
                    }
                    )
            }
        })
}


export default authReducer;