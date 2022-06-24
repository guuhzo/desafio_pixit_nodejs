import { getRepository } from 'typeorm'

import User from '../models/entities/User'

/**
 * Seleciona somente as propriedades que não são sensíveis do usuário.
 */
class GetUserService {
  async execute(userId: number): Promise<User | undefined> {
    const userRepository = getRepository(User)

    const user = await userRepository.findOne({
      where: { id: userId },
      select: ['id', 'firstName', 'lastName', 'username']
    })

    return user
  }
}

export default GetUserService
