import { Request, Response } from 'express'
import path from 'path'

import VerifyUserCredentialsService from '../../modules/User/services/verifyUserCredentials'


const pagesPath = path.resolve(__dirname, '..', '..', '..', 'public', 'pages')

/**
 * Obtém as informações do corpo da requisição e valida as credenciais.
 * Caso a propriedade isValid seja falsa a query string será enviada para apresentar a mensagem de erro.
 * Caso a propriedade userId seja undefined também será enviad a query string para apresentar a mensagem de erro.
 * Caso tenha algum problema no banco será retornado uma tela de erro para o usuário.
 */
export default async function (req: Request, res: Response) {
  const data = req.body
  console.log(req.params)
  
  const verifyUserCredentials = new VerifyUserCredentialsService()
  
  try {
    const {isValid, userId} = await verifyUserCredentials.execute(data)

    if (!(isValid && userId)) {
      return res.redirect('/login?error=credentials')
    }

    req.session.logged = true
    req.session.userId = userId

    res.redirect(`/home`)
  } catch (err) {
    res.sendFile(path.resolve(pagesPath, 'error.html'))
  }
}