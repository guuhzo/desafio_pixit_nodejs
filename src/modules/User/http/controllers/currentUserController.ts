import { Request, Response } from 'express'

import GetUserService from '../../services/getUserService'

/**
 * Obtém o usuário a partir do userId da Sessão.
 * Caso o usuário não esteja logado será retornado para o client 401
 * Caso tenha alguma exception ao tentar procurar o usuário será retornado par ao cliente 400
 */
class CurrentUserController {
  async show (req: Request, res: Response) {
    if (!req.session.logged) {
      return res.status(401).json({ message: 'sem autorização'})
    }

    const getUser = new GetUserService()

    try {
      const user = await getUser.execute(req.session.userId!)
      
      console.log(user)
      return res.json(user)
    } catch (err: any) {
      console.log(err)
      return res.status(400).json({ message: err.message })
    }
    
  }
}

export default new CurrentUserController()