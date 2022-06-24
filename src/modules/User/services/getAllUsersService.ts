import { getRepository } from 'typeorm'

import User from '../models/entities/User'

/**
 * Seleciona somente as propriedades que não são sensíveis dos usuários.
 */
class GetAllUsersService {
  async execute(): Promise<User[]> {
    const userRepository = getRepository(User)

    const users = await userRepository.find({
      select: ['id', 'firstName', 'lastName', 'username']
    })

    return users
  }
}

export default GetAllUsersService
