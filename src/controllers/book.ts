import getErrorMessage from './errors';
import { Request, Response } from 'express';
import Book from '../models/book';

class BookController {
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const book = await Book.create(req.body);
      res.json(book);
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  }

  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const book = await Book.findByPk(req.params.id);
      res.json(book);
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const books = await Book.findAll();
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      await Book.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.json({ message: 'Book updated successfully' });
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  }

  public async remove(req: Request, res: Response): Promise<void> {
    try {
      await Book.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.json({ message: 'Book deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  }
}

export default new BookController();
