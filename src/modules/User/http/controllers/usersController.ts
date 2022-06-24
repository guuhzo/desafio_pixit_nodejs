import { Request, Response } from 'express'

import GetAllUsersService from '../../services/getAllUsersService'
import DeleteUserService from '../../services/deleteUserService'

class UsersController {
  /**
   * Obtém todos os usuários do banco de dados.
   * Caso não seja uma sessão válida é retornado para o cliente 401.
   */
  async index (req: Request, res: Response) {
    if (!req.session.logged) {
      return res.status(401).json({ message: 'sem autorização'})
    }

    const getAllUsersService = new GetAllUsersService()
    const users = await getAllUsersService.execute()
    
    res.json(users)
  }
  /**
   * Deleta o usuário cujo ID é provido nos parâmetros da requisição.
   * Caso não seja uma sessão válida é retornado para o cliente 401.
   * Caso o userId da sessão seja o mesmo que o id passado no parameto é retornado para o cliente 400.
   */
  async delete (req: Request, res: Response) {
    if (!req.session.logged) {
      return res.status(401).json({ message: 'sem autorização'})
    }

    if (req.session.userId === +req.params.id) {
      return res.status(400).json({ message: 'Não é possível excluir o usuário da sessão'})
    }

    const deleteUser = new DeleteUserService()
    await deleteUser.execute(+req.params.id)
    
    res.status(204).send()
  }
}

export default new UsersController()