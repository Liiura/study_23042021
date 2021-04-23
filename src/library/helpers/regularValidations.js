export const validateUsername = (email) => {
    return email.length < 8
}

export const validatePassword = (password) => {
    return password.length < 6
}

export const validateEmptyFieldsLogin = ({email, password}) => {
    return !email || !password
}