import ReservationRoutes from "./ReservationRoutes.js";
import PreorderRoutes from "./PreorderRoutes.js";
import TableRoutes from "./TableRoutes.js";
import UserRoutes from "./UserRoutes.js";
import MealRoutes from "./MealRoutes.js";
import Routes from 'express';

const router = Routes();

router.use('/reservation', ReservationRoutes);
router.use('/preorder', PreorderRoutes);
router.use('/table', TableRoutes);
router.use('/user', UserRoutes);
router.use('/meal', MealRoutes);

export default router;