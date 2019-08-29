import { combineReducers } from "redux";
import foundations from './foundations';
import user from './user';

export default combineReducers({
    foundations,
    user,
})