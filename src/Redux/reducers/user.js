import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/login'

export default function (state = [], { type, payload }) {
    switch (type) {
        case LOGIN_PENDING:
            return {
                pending: true,
                current: null,
            }
        case LOGIN_SUCCESS:
            return {
                pending: false,
                current: payload,
            }
        default:
            return state
    }
}
