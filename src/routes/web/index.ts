import express from 'express'

import loginRoute from './login.routes'
import signInRoute from './signIn.routes'
import registrationRoute from './registration.routes'
import signOutRoute from './signOut.routes'
import homeRoute from './home.routes'
import newUserRoute from './newUser.routes'

const routes = express.Router()

routes.get('/', (req, res) => {
  if (req.session.logged) {
    return res.redirect('/home')
  }
  
  res.redirect('/login')
})
routes.get('/login', loginRoute)
routes.post('/signIn', signInRoute)
routes.get('/signOut', signOutRoute)
routes.get('/home', homeRoute)
routes.post('/registration', registrationRoute)
routes.get('/users/new', newUserRoute)


export default routes;