import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialiogsReducer';
import sideBarReducer from './sideBarReducer';
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./appReducer";

let reducers = combineReducers({ 
    profilePage: profileReducer, 
    messagesPage: dialogsReducer, 
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;