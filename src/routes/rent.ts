import express, { Request, Response } from 'express';
import authenticateMiddleware from '../middlewares/auth';
import getErrorMessage from '../controllers/errors';

const router = express.Router();

router.post('/rent', authenticateMiddleware, async (req: Request, res: Response) => {
  console.log("....")
  try {
    console.log("1");
    const user = req.user;
    console.log("2");

    if (user) {
      const id = user.id;
      res.json({ message: 'Book rented successfully' });
    } else {
      throw new Error("Error in user")
    }
  } catch (error) {
    res.status(500).json({ error: getErrorMessage(error) });
  }
});

export default router;