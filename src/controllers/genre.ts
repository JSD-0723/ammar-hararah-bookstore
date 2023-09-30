import getErrorMessage from './errors';
import { Request, Response } from 'express';
import Genre from '../models/genre';

class GenreController {
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const genre = await Genre.create(req.body);
      res.json(genre);
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  }

  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const genre = await Genre.findByPk(req.params.id);
      res.json(genre);
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const genres = await Genre.findAll();
      res.json(genres);
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      await Genre.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.json({ message: 'Genre updated successfully' });
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  }

  public async remove(req: Request, res: Response): Promise<void> {
    try {
      await Genre.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.json({ message: 'Genre deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  }
}

export default new GenreController();
