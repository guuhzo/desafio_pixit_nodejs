import express from 'express'
import bigBang from '../shared/middlewares/bigBang'

import apiRoutes from './server'
import webRoutes from './web'

const routes = express.Router()

/**
 * Adiciona o middleware para executar antes de qualquer rota
 */
routes.use(bigBang)

/**
 * Rotas responsáveis pelos Recursos REST
 */
routes.use('/server', apiRoutes)

/**
 * Rotas responsáveis por prover o HTML para o cliente
 */
routes.use('/', webRoutes)

export default routes