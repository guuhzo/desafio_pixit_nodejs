import { Request, Response, NextFunction } from 'express'
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt'

import User from '../../modules/User/models/entities/User';
import ICreateUserDto from '../../modules/User/models/dtos/createUserDto';

/**
 * Middleware responsável por identificar se existe algum usuário na base de dados,
 * se não existir registros o "Big Bang" ocorre e o primeiro usuário será criado de 
 * acordo com as informações providas nas variáveis de ambiente no arquivo .env.
 */
export default async function bigBang (req: Request, res: Response, next: NextFunction) {
  const userRepository = getRepository(User);

    const users = await userRepository.count()

    if (users > 0) {
      return next()
    }

    if (!(process.env.FIRST_PASSWORD && process.env.FIRST_USERNAME && process.env.FIRST_FIRSTNAME && process.env.FIRST_LASTNAME)) {
      throw new Error('As variáveis de ambientes referente ao primeiro usuário não foram encontradas')
    }

    const salt = await bcrypt.genSalt(10)
    const password = process.env.FIRST_PASSWORD!
    const passwordHash = await bcrypt.hash(password, salt)

    const data = {
      firstName: process.env.FIRST_FIRSTNAME,
      lastName: process.env.FIRST_LASTNAME,
      password: passwordHash,
      username: process.env.FIRST_USERNAME
    } as ICreateUserDto
    

    const user = userRepository.create(data)
    
    await userRepository.save(user)

    console.log('Usuário criado:', data.username, 'Senha:', password)
    next()
}