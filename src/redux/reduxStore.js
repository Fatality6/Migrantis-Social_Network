import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialiogsReducer';
import sideBarReducer from './sideBarReducer';
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({ 
    profilePage: profileReducer, 
    messagesPage: dialogsReducer, 
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;