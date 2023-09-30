import { Request, Response } from 'express';
import getErrorMessage from './errors';

class HomeController {
  public async redirectToBooksList(req: Request, res: Response): Promise<void> {
    try {
      res.redirect('/books');
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  }
}

export default new HomeController();