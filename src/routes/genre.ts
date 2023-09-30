import express from 'express';
import genreController from '../controllers/genre';

const router = express.Router();

router.post('/genres', genreController.create);
router.get('/genres/:id', genreController.getById);
router.get('/genres', genreController.getAll);
router.put('/genres/:id', genreController.update);
router.delete('/genres/:id', genreController.remove);

export default router;