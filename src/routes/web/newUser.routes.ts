import { Request, Response } from 'express'
import path from 'path'

const pagesPath = path.resolve(__dirname, '..', '..', '..', 'public', 'pages')

/**
 * Verifica a sessão e se o usuário estiver logado segue para a Home, caso o contrário
 * volta para o login.
 */
export default function (req: Request, res: Response) {
  if (!req.session.logged) {
    return res.redirect('/')
  }

  res.sendFile(path.resolve(pagesPath, 'newUser.html'))
}