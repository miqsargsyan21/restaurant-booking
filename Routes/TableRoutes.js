import { Router } from "express";
import {
  getAllTables,
  getTableById,
  updateTable,
  deleteTable,
  addTable
} from "../Controllers/TableControllers.js";

const router = Router();

router.route('/')
  .get(getAllTables)
  .post(addTable);

router.route('/:id')
  .get(getTableById)
  .put(updateTable)
  .delete(deleteTable);

export default router;