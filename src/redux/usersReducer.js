import { UsersAPI } from "../api/api"
import { updateObjectInArray } from "../utils/helpers/objectHelper"

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'users/SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 12,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingIsProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, 'id', action.userId, {followed: true})
            } 

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, 'id', action.userId, {followed: false})
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUserCount: action.totalCount
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingIsProgress: action.following
                    ? [...state.followingIsProgress, action.userId]
                    : state.followingIsProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (following, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, following, userId
})

//=====thunks=======
export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    const data = await UsersAPI.getUsers(currentPage, pageSize)
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
}
    
export const unfollow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    const data = await UsersAPI.delete(userId)
        if (data.resultCode === 0) dispatch(unfollowSuccess(userId))
        dispatch(toggleFollowingProgress(false, userId))
}
    
export const follow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    const data = await UsersAPI.post(userId)
        if (data.resultCode === 0) dispatch(followSuccess(userId))
        dispatch(toggleFollowingProgress(false, userId))
}

export default usersReducer