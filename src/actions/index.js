const logoutProfile = () => {
    return {
        type: 'LOGOUT_USER',
    }
}

const loginProfile = () => {
    return {
        type: 'LOGIN_USER',
    }
}

export {logoutProfile,
        loginProfile};