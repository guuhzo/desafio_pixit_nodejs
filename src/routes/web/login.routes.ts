import { Request, Response } from 'express'
import path from 'path'

const pagesPath = path.resolve(__dirname, '..', '..', '..', 'public', 'pages')

/**
 * Verifica a sessão e se o usuário estiver logado segue pula a etapa de login.
 */
export default function (req: Request, res: Response) {
  if (req.session.logged) {
    return res.redirect('/home')
  }
  
  res.sendFile(path.resolve(pagesPath, 'login.html'))
}