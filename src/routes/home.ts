import express from 'express';
import HomeController from '../controllers/home';

const router = express.Router();

router.get('/', HomeController.redirectToBooksList);

export default router;
