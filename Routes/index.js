import ReservationRoutes from "./ReservationRoutes.js";
import TableRoutes from "./TableRoutes.js";
import UserRoutes from "./UserRoutes.js";
import Routes from 'express';

const router = Routes();

router.use('/reservation', ReservationRoutes);
router.use('/table', TableRoutes);
router.use('/user', UserRoutes);

export default router;