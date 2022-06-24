import express from 'express'

import userRoutes from '../../modules/User/http/routes'

const routes = express.Router()

routes.use('/users', userRoutes)

export default routes;