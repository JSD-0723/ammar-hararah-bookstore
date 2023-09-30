import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import { JWT_SECRET } from '../config/config';
import getErrorMessage from './errors';

class AuthController {
  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      
      if (!(user && user.comparePassword(password))) {
        res.status(401).json({ message: 'Invalid credentials' });
        return;
      }
      
      const payload = { id: user.id };
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  }
}

export default new AuthController();