import validate from "../Services/Validator/validate.js";
import { Meal } from '../models/index.js';

const validationRules = [
  {
    validator: 'name',
    field: 'name',
  },
  {
    validator: 'number',
    field: 'price',
  },
  {
    validator: 'description',
    field: 'description',
  }
];

const getAllMeals = async (req, res) => {
  try {
    const response = await Meal.findAll();

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

const getMealById = async (req, res) => {
  const { id: mealId } = req.params;

  try {
    const response = await Meal.findByPk(mealId);

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

const addMeal = async (req, res) => {
  const { name, price, description } = req.body;

  try {
    const isValid = await validate(req.body, validationRules);

    if (!isValid) {
      throw new Error('Invalid data');
    }

    const response = await Meal.create({ name, price, description });

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

const updateMeal = async (req, res) => {
  const { id: mealId } = req.params;
  const { name, price, description } = req.body;

  try {
    const isValid = await validate(req.body, validationRules);

    if (!isValid) {
      throw new Error('Invalid data');
    }

    const response = await Meal.update({ name, price, description }, { where: { meal_id: mealId } });

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

const deleteMeal = async (req, res) => {
  const { id: mealId } = req.params;

  try {
    const response = await Meal.destroy({ where: { meal_id: mealId } });

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

export {
  getAllMeals,
  getMealById,
  updateMeal,
  deleteMeal,
  addMeal,
};