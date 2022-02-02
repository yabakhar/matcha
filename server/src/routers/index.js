const auth = require('../routers/authentification.js')
const getUsers = require('../routers/getAllUsers.js')
const signup = require('../routers/signUp.js')
const completeProfile = require('../routers/completeProfile.js')
const validateEmail = require('../routers/validateEmail.js')
const changePassword = require('./changePassword.js')
const allRoutes = (app) => {
    const routes = {
        '/user': [
            auth,
            getUsers,
            signup,
            completeProfile,
            validateEmail,
            changePassword,
        ],
    }
    Object.keys(routes).forEach((route) => {
        routes[route].forEach((element) => {
          if (route === '') app.use(element)
          else app.use(route, element)
        })
    })
}

module.exports = allRoutes