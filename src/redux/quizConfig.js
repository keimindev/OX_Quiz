import {createStore, combineReducers } from "redux";
import quiz from "./modules/quizReducer";
import getUser from "./modules/userReducer";


const rootReducer = combineReducers({quiz, getUser})
const store = createStore(rootReducer)

export default store
