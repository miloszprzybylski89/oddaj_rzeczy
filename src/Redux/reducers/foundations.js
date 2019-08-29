import { FOUNDATIONS_PENDING, FOUNDATIONS_SUCCESS } from '../actions/foundations'

export default function (state = [], { type, payload }) {
    switch (type) {
        case FOUNDATIONS_PENDING:
            return {
                pending: true,
                items: null,
            }
        case FOUNDATIONS_SUCCESS:
            return {
                pending: false,
                items: payload,
            }
        default:
            return state
    }
}
