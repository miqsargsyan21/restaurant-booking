import ReservationRoutes from "./ReservationRoutes.js";
import TableRoutes from "./TableRoutes.js";
import Routes from 'express';

const router = Routes();

router.use('/reservation', ReservationRoutes);
router.use('/user', TableRoutes);

export default router;