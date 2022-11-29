import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialiogsReducer';
import sideBarReducer from './sideBarReducer';
import usersReducer from "./usersReducer";

let reducers = combineReducers({ 
    profilePage: profileReducer, 
    messagesPage: dialogsReducer, 
    sideBar: sideBarReducer,
    usersPage: usersReducer 
});

let store = createStore(reducers);

export default store;