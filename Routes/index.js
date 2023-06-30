import UserRoutes from "./UserRoutes.js";
import Routes from 'express';

const router = Routes();

router.use('/user', UserRoutes);

export default router;