import express from 'express'

import usersController from '../controllers/usersController'
import currentUserController from '../controllers/currentUserController'

const routes = express.Router()

routes.get('/', usersController.index)
routes.get('/me', currentUserController.show)
routes.delete('/:id', usersController.delete)

export default routes;
