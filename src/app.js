import ReservationRoutes from "../src/Reservation/ReservationRoutes.js";
import PreorderRoutes from "../src/Preorder/PreorderRoutes.js";
import TableRoutes from "../src/Table/TableRoutes.js";
import UserRoutes from "../src/User/UserRoutes.js";
import MealRoutes from "../src/Meal/MealRoutes.js";
import Routes from 'express';

const appRouter = Routes();

appRouter.use('/reservation', ReservationRoutes);
appRouter.use('/preorder', PreorderRoutes);
appRouter.use('/table', TableRoutes);
appRouter.use('/user', UserRoutes);
appRouter.use('/meal', MealRoutes);

export default appRouter;