import getErrorMessage from './errors';
import { Request, Response } from 'express';
import Publisher from '../models/publisher';

class PublisherController {
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const publisher = await Publisher.create(req.body);
      res.json(publisher);
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  }

  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const publisher = await Publisher.findByPk(req.params.id);
      res.json(publisher);
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const publishers = await Publisher.findAll();
      res.json(publishers);
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      await Publisher.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.json({ message: 'Publisher updated successfully' });
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  }

  public async remove(req: Request, res: Response): Promise<void> {
    try {
      await Publisher.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.json({ message: 'Publisher deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  }
}

export default new PublisherController();
