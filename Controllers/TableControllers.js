import validate from "../Services/Validator/validate.js";
import { Table } from '../models/index.js';

const validationRules = [
  {
    validator: 'number',
    field: 'number',
  },
  {
    validator: 'number',
    field: 'seats',
  },
  {
    validator: 'status',
    field: 'status',
  }
];

const getAllTables = async (req, res) => {
  try {
    const tables = await Table.findAll();

    res.status(200).json({
      success: true,
      data: tables,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

const getTableById = async (req, res) => {
  const { id: tableId } = req.params;

  try {
    const table = await Table.findByPk(tableId);

    res.status(200).json({
      success: true,
      data: table,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

const addTable = async (req, res) => {
  const { number, seats, status } = req.body;

  try {
    const isValid = validate(req.body, validationRules);

    if (!isValid) {
      throw new Error('Invalid data');
    }

    const table = await Table.create({
      number,
      seats,
      status,
    });

    res.status(200).json({
      success: true,
      data: table,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

const updateTable = async (req, res) => {
  const { id: tableId } = req.params;
  const { number, seats, status } = req.body;

  try {
    const isValid = validate(req.body, validationRules);

    if (!isValid) {
      throw new Error('Invalid data');
    }

    const table = await Table.update({
      number,
      seats,
      status,
    }, {
      where: {
        id: tableId,
      },
    });

    res.status(200).json({
      success: true,
      data: table,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

const deleteTable = async (req, res) => {
  const { id: tableId } = req.params;

  try {
    const table = await Table.destroy({
      where: {
        id: tableId,
      },
    });

    res.status(200).json({
      success: true,
      data: table,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

export {
  getAllTables,
  getTableById,
  updateTable,
  deleteTable,
  addTable
};