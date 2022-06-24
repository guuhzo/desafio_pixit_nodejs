import { Request, Response } from 'express'
import path from 'path'

import CreateUserService from '../../modules/User/services/createUsersService'

const pagesPath = path.resolve(__dirname, '..', '..', '..', 'public', 'pages')
/**
 * Obtém as informações do corpo da requisição e tenta criar o usuário.
 * Caso o username já exista a query string será enviada para apresentar a mensagem de erro.
 * Caso tenha algum problema no banco será retornado uma tela de erro para o usuário.
 */
export default async function (req: Request, res: Response) {
  const data = req.body
  
  const createUser = new CreateUserService()
  
  try {
    const user = await createUser.execute(data)

    if (!user) {
      return res.redirect('/users/new?error=username')
    }

    res.redirect(`/home`)
  } catch (err) {
    res.sendFile(path.resolve(pagesPath, 'error.html'))
  }
}