import { Request, Response } from 'express'

/**
 * Mata a sessão do usuário.
 */
export default async function (req: Request, res: Response) {
  req.session.logged = false
  req.session.userId = undefined

  res.redirect('/')
}