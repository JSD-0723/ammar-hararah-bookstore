// src/routes/books.route.ts

import express from 'express';
import bookController from '../controllers/book';

const router = express.Router();

router.post('/books', bookController.create);
router.get('/books/:id', bookController.getById);
router.get('/books', bookController.getAll);
router.put('/books/:id', bookController.update);
router.delete('/books/:id', bookController.remove);

export default router;
