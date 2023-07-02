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
  res.send('getPreorderById');
};

const addPreorder = async (req, res) => {
  res.send('addPreorder');
};

const updatePreorder = async (req, res) => {
  res.send('updatePreorder');
};

const deletePreorder = async (req, res) => {
  res.send('deletePreorder');
};

export {
  getAllPreorders,
  getPreorderById,
  updatePreorder,
  deletePreorder,
  addPreorder
};