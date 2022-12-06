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

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } });

export const setUser = (user) => ({ type: SET_USER, user })

export default authReducer;