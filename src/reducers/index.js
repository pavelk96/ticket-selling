const initialState = {
    isAuthorization: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case `LOGOUT_USER`:
            return {...state, isAuthorization: false}

        default:
            return state;
    }
};

export default reducer;