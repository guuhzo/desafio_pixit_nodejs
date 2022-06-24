import { getRepository } from 'typeorm'
import bcrypt from 'bcrypt'

import ICreateUserDto from '../models/dtos/createUserDto'
import User from '../models/entities/User'

/**
 * Cria usuário a partir das informações enviadas pelo cliente.
 * Caso já exista um usuário com o username provido o processo é abortado.
 */
class CreateUserService {
  async execute(data: ICreateUserDto): Promise<User | undefined> {
    const userRepository = getRepository(User)

    const userDb = await userRepository.findOne({ where: { username: data.username } })

    
    if (userDb) return
    
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(data.password, salt)

    const user = userRepository.create({ ...data, password: passwordHash })
    
    await userRepository.save(user)

    return user
  }
}

export default CreateUserService
