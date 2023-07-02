import { Reservation, User, Table } from '../models/index.js';

const getAllReservations = async (req, res) => {
  try {
    const response = await Reservation.findAll();

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
  const { date, time, duration, status, userId, tableId } = req.body;

  try {
    const reservation = await Reservation.create({
      date,
      time,
      duration,
      status,
      UserId: userId,
      TableId: tableId,
    });

    const user = await User.findByPk(userId);
    const table = await Table.findByPk(tableId);

    await reservation.addUser(user);
    await reservation.addTable(table);

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
  res.send(`Hello world! ${req.params.id}`);
};

const deleteReservation = async (req, res) => {
  res.send(`Hello world! ${req.params.id}`);
};

export {
  getAllReservations,
  getReservationById,
  updateReservation,
  deleteReservation,
  addReservation
};