export const FOUNDATIONS_PENDING = 'FOUNDATIONS_PENDING';
export const FOUNDATIONS_SUCCESS = 'FOUNDATIONS_SUCCESS';
export const FOUNDATIONS_ERROR = 'FOUNDATIONS_ERROR';

export const foundationsStart = () => ({
    type: FOUNDATIONS_PENDING
})

export const getFoundationSuccess = (data) => ({
    type: FOUNDATIONS_SUCCESS,
    payload: data
})



export const getFoundations = () => (dispatch) => {
    dispatch(foundationsStart());
    setTimeout(() => fetch('http://localhost:3001/dataBase')
        .then(res => res.json())
        .then(success => {
            dispatch(getFoundationSuccess(success));
        }), 5000)

    // .catch(err => {
    //     dispatch(setLoginPending(false));
    // })
}