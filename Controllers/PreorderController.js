import { Meal, Preorder, Reservation } from '../models/index.js';

const getAllPreorders = async (req, res) => {
  try {
    const response = await Preorder.findAll({
      include: [
        {
          model: Reservation,
        },
        {
          model: Meal,
        }
      ]
    });

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

const getPreorderById = async (req, res) => {
  const { id: preorderID } = req.params;

  try {
    const response = await Preorder.findByPk(preorderID, {
      include: [
        {
          model: Reservation,
        },
        {
          model: Meal,
        }
      ]
    });

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

const addPreorder = async (req, res) => {
  const { reservationId, mealId } = req.body;

  try {
    const reservation = await Reservation.findByPk(reservationId);
    const meal = await Meal.findByPk(mealId);

    if (!reservation) {
      throw new Error('Reservation not found');
    } else if (!meal) {
      throw new Error('Meal not found');
    }

    const response = await Preorder.create({
      ReservationId: reservationId,
      MealId: mealId,
    });

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

const updatePreorder = async (req, res) => {
  const { id: preorderId } = req.params;
  const { reservationId, mealId } = req.body;

  try {
    const reservation = await Reservation.findByPk(reservationId);
    const meal = await Meal.findByPk(mealId);

    if (!reservation) {
      throw new Error('Reservation not found');
    } else if (!meal) {
      throw new Error('Meal not found');
    }

    const response = await Preorder.update({
      ReservationId: reservationId,
      MealId: mealId,
    }, {
      where: {
        id: preorderId,
      }
    });

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

const deletePreorder = async (req, res) => {
  const { id: preorderId } = req.params;

  try {
    const response = await Preorder.destroy({
      where: {
        id: preorderId,
      }
    });

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
  getAllPreorders,
  getPreorderById,
  updatePreorder,
  deletePreorder,
  addPreorder
};