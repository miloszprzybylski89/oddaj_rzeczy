export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const loginStart = () => ({
    type: LOGIN_PENDING
})

export const setLoginSuccess = (data) => ({
    type: LOGIN_SUCCESS,
    payload: data
})



export const login = (email, password) => (dispatch) => {
    dispatch(loginStart());

    fetch('http://localhost:3001/users')
        .then(res => res.json())
        .then(res => res.find(item => item.login === email && item.password === password))
        .then(success => {
            dispatch(setLoginSuccess(success));
        })
    // .catch(err => {
    //     dispatch(setLoginPending(false));
    // })
}