import getErrorMessage from './errors';
import { Request, Response } from 'express';
import Author from '../models/author';

class AuthorController {
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const author = await Author.create(req.body);
      res.json(author);
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  }

  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const author = await Author.findByPk(req.params.id);
      res.json(author);
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const authors = await Author.findAll();
      res.json(authors);
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      await Author.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.json({ message: 'Author updated successfully' });
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  }

  public async remove(req: Request, res: Response): Promise<void> {
    try {
      await Author.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.json({ message: 'Author deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  }
}

export default new AuthorController();
