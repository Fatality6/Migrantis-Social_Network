const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SHOW_MORE = 'SHOW-MORE';

 let initialState = {
    users: [
         { id: '1', followed: true, name: 'Oleg D.', location: {country: 'RUSSIA', city:'Mezhdurechensk'}, status: 'Hi all!', 
        photos: {small:'https://avatars.mds.yandex.net/i?id=7bebe2b238ac44e7b942dc67fa0a1bce_sr-5562949-images-thumbs&n=13',large:null} },
        { id: '2', followed: false, name: 'Pavel Z.', location: {country: 'RUSSIA', city:'Moskow'}, status: 'Hi all!', 
        photos: {small:'https://avatars.mds.yandex.net/i?id=b90dfe513912b4894977640a78fe8990-5221698-images-thumbs&n=13',large:null}},
        { id: '3', followed: true, name: 'Egor K.', location: {country: 'USA', city:'LA'}, status: 'Hi all!', 
        photos: {small:'https://avatars.mds.yandex.net/i?id=8094adf60f703f023586e3eb6303e2fb-4358711-images-thumbs&n=13',large:null}}
      ]
}; 

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u =>{
                    if (u.id === action.userId){
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };

        case UNFOLLOW: 
            return {
                ...state,
                users: state.users.map( u =>{
                    if (u.id === action.userId){
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };

        case SET_USERS:
            return { 
                ...state, 
                users: [ ...state.users, ...action.users] 
            };

        case SHOW_MORE: 
            return {};

        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export const setUsersAC = (users) => ({ type: SET_USERS, users });

export const showMore = () => ({ type: SHOW_MORE });

export default usersReducer;