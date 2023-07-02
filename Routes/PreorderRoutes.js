import { Router } from 'express';
import {
  getAllPreorders,
  getPreorderById,
  updatePreorder,
  deletePreorder,
  addPreorder
} from '../Controllers/PreorderController.js';

const router = Router();

router.route('/')
  .get(getAllPreorders)
  .post(addPreorder);

router.route('/:id')
  .get(getPreorderById)
  .put(updatePreorder)
  .delete(deletePreorder);

export default router;