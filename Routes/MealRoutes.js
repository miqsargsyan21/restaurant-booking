import { Router } from "express";
import {
  getAllMeals,
  getMealById,
  updateMeal,
  deleteMeal,
  addMeal,
} from "../Controllers/MealControllers.js";

const router = Router();

router.route("/")
  .get(getAllMeals)
  .post(addMeal);

router.route("/:id")
  .get(getMealById)
  .put(updateMeal)
  .delete(deleteMeal);

export default router;