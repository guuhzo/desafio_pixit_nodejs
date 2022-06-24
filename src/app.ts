import "reflect-metadata"
import dotenv from 'dotenv'

dotenv.config()

import express from 'express'
import session from 'express-session'
import path from 'path'

import './config/database'

import routes from './routes'

const app = express()

const staticPath = path.resolve(__dirname, '..', 'public', 'static')

/**
 * Configura a sessão, habilita o recebimento de JSON e formulários e 
 * libera o acesso aos arquivos estáticos.
 * Não esquecer a variável SESSION_SECRET no arquivo .env
 */
app.use(session({
  secret: process.env.SESSION_SECRET!, 
  resave: true,
  saveUninitialized: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(staticPath))

app.use(routes)

app.listen(process.env.PORT || 3333, () => console.log('Server Running...'))
