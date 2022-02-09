const auth = require('../routers/authentification.js')
const getUsers = require('../routers/getusers.js')
const signup = require('../routers/signUp.js')
const completeProfile = require('../routers/completeProfile.js')
const validateEmail = require('../routers/validateEmail.js')
const changePassword = require('./changePassword.js')
const forgetpassword = require('./forgetpassward.js')
const newPassword = require('./newPassword.js')
const gettags = require('./getTags.js')
const getsearshTag = require('./getsearshTag.js')
const allRoutes = (app) => {
    const routes = {
        '/user': [
            auth,
            getUsers,
            signup,
            completeProfile,
            validateEmail,
            changePassword,
            forgetpassword,
            newPassword,
            gettags,
            getsearshTag,
        ],
    }
    Object.keys(routes).forEach((route) => {
        routes[route].forEach((element) => {
          if (route === '') app.use(element)
          else app.use(route, element)
        })
    })
}

module.exports = allRoutes;
