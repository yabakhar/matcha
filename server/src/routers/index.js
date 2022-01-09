const auth = require('../routers/authentification.js')
const getUsers = require('../routers/getAllUsers.js')
const signup = require('../routers/signUp.js')
const completeProfile = require('../routers/completeProfile.js')
const allRoutes = (app) => {
    const routes = {
        '/user': [
            auth,
            getUsers,
            signup,
            completeProfile
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