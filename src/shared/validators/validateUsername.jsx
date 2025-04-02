export const validateUsername = (username) => {
const regex = /^\S{3,8}$/
return regex.test(username)    

}

export const validateUsernameMessage = 'El usuermane debe de tener estre 3 y 8 caracteres'