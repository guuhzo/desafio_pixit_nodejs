import { getRepository } from 'typeorm'
import bcrypt from 'bcrypt'

import User from '../models/entities/User'
import ISignInDto from '../models/dtos/signInDto'

interface IResult {
  isValid: boolean
  userId?: number
}

/**
 * Verifica se existe um usuário com o username provido e em seguida se positivo valida a senha.
 */
class VerifyUserCredentials {
  async execute(data: ISignInDto): Promise<IResult> {
    const userRepository = getRepository(User)

    const user = await userRepository.findOne({ where: { username: data.username } })
    
    let isValid = false
    if (user) {
      isValid = await bcrypt.compare(data.password, user!.password)
    }


    return {
      isValid,
      userId: user ? user.id : undefined
    }
  }
}

export default VerifyUserCredentials
