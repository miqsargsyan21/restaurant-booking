import { Router } from "express";
import {
  getAllReservations,
  getReservationById,
  updateReservation,
  deleteReservation,
  addReservation
} from "../Controllers/ReservationControllers.js";

const router = Router();

router.route('/')
  .get(getAllReservations)
  .post(addReservation);

router.route('/:id')
  .get(getReservationById)
  .put(updateReservation)
  .delete(deleteReservation);

export default router;