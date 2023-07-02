import { syncToDatabase } from "../Modules/SequelizeModule.js";
import Reservation from "./Reservation.js";
import Preorder from "./Preorder.js";
import Table from "./Table.js";
import User from "./User.js";
import Meal from "./Meal.js";

User.belongsToMany(Table, { through: Reservation, as: 'Users' });
Table.belongsToMany(User, { through: Reservation, as: 'Tables' });

Meal.belongsToMany(Reservation, { through: Preorder, as: 'Meals' });
Reservation.belongsToMany(Meal, { through: Preorder, as: 'Reservations' });

syncToDatabase();

export {
  Reservation,
  Preorder,
  Table,
  User,
  Meal
};
