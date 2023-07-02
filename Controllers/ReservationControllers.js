import { Reservation, User, Table } from '../models/index.js';
import validate from "../Services/Validator/validate.js";

const validationRules = [
  {
    validator: 'date',
    field: 'date',
  },
  {
    validator: 'time',
    field: 'time',
  },
  {
    validator: 'number',
    field: 'duration',
  }
];

const getAllReservations = async (req, res) => {
  try {
    const response = await Reservation.findAll({
      include: [
        {
          model: User,
        },
        {
          model: Table,
        }
      ],
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

const getReservationById = async (req, res) => {
  const { id: reservationId } = req.params;

  try {
    const response = await Reservation.findByPk(reservationId, {
      include: [
        {
          model: User,
        },
        {
          model: Table,
        }
      ],
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

const addReservation = async (req, res) => {
  const { date, time, duration, userId, tableId } = req.body;

  try {
    const isValid = validate(req.body, validationRules);

    if (!isValid) {
      throw new Error('Invalid data');
    }

    const user = await User.findByPk(userId);
    const table = await Table.findByPk(tableId);

    if (!user) {
      throw new Error(`User with id ${userId} not found`);
    } else if (!table) {
      throw new Error(`Table with id ${tableId} not found`);
    }

    const reservation = await Reservation.create({
      date,
      time,
      duration,
      UserId: userId,
      TableId: tableId,
    });

    res.status(200).json({
      success: true,
      data: reservation,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

const updateReservation = async (req, res) => {
  const { id: reservationId } = req.params;
  const { date, time, duration, userId, tableId } = req.body;

  try {
    const isValid = validate(req.body, validationRules);

    if (!isValid) {
      throw new Error('Invalid data');
    }

    const reservation = await Reservation.findByPk(reservationId);

    if (!reservation) {
      throw new Error(`Reservation with id ${reservationId} not found`);
    }

    const user = await User.findByPk(userId);
    const table = await Table.findByPk(tableId);

    if (!user) {
      throw new Error(`User with id ${userId} not found`);
    } else if (!table) {
      throw new Error(`Table with id ${tableId} not found`);
    }

    reservation.date = date;
    reservation.time = time;
    reservation.duration = duration;
    reservation.UserId = userId;
    reservation.TableId = tableId;

    await reservation.save();

    res.status(200).json({
      success: true,
      data: reservation,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

const deleteReservation = async (req, res) => {
  const { id: reservationId } = req.params;

  try {
    const reservation = await Reservation.findByPk(reservationId);

    if (!reservation) {
      throw new Error(`Reservation with id ${reservationId} not found`);
    }

    await reservation.destroy();

    res.status(200).json({
      success: true,
      message: `Reservation with id ${reservationId} deleted`,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

export {
  getAllReservations,
  getReservationById,
  updateReservation,
  deleteReservation,
  addReservation
};