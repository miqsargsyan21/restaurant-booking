import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  addUser
} from "../Controllers/UserControllers.js";

const router = Router();

router.route('/')
  .get(getAllUsers)
  .post(addUser);

router.route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

export default router;