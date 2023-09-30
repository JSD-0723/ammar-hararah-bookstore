import express from 'express';
import publisherController from '../controllers/publisher';

const router = express.Router();

router.post('/publishers', publisherController.create);
router.get('/publishers/:id', publisherController.getById);
router.get('/publishers', publisherController.getAll);
router.put('/publishers/:id', publisherController.update);
router.delete('/publishers/:id', publisherController.remove);

export default router;
