import { combineReducers } from "redux";
import { LOGIN_PENDING, LOGIN_SUCCESS } from './actions'



const user = (state = [], { type, payload }) => {
    switch (type) {
        case LOGIN_PENDING:
            return {
                pending: true,
                user: null,
            }
        case LOGIN_SUCCESS:
            return {
                pending: false,
                user: payload,
            }
        default:
            return state
    }
}


export default combineReducers({
    user
})