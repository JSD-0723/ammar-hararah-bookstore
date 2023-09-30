import express from 'express';
import authorController from '../controllers/author';

const router = express.Router();

router.post('/authors', authorController.create);
router.get('/authors/:id', authorController.getById);
router.get('/authors', authorController.getAll);
router.put('/authors/:id', authorController.update);
router.delete('/authors/:id', authorController.remove);

export default router;
