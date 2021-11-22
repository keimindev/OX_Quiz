import {createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import quiz from "./modules/quizReducer";
import getUser from "./modules/userReducer";

const middelwarese = [thunk];
const enhancer = applyMiddleware(...middelwarese);
const rootReducer = combineReducers({quiz, getUser})
const store = createStore(rootReducer, enhancer)

export default store
