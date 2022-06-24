import { getRepository } from 'typeorm'

import User from '../models/entities/User'

/**
 * É verificado se existe algum usuário com o id provido, se sim, o processo segue normal retornando true no final.
 * Caso não exista nenhum usuário é retornado o resultado da operação como false.
 */
class DeleteUserService {
  async execute(userId: number): Promise<boolean> {
    const userRepository = getRepository(User)

    const count = await userRepository.count({ where: { id: userId } })
    if (count === 0) return false

    await userRepository.delete({ id: userId })

    return true
  }
}

export default DeleteUserService
