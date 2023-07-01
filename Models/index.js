import { syncToDatabase } from "../Modules/SequelizeModule.js";
import Reservation from "./Reservation.js";
import Preorder from "./Preorder.js";
import Table from "./Table.js";
import User from "./User.js";
import Meal from "./Meal.js";

User.hasMany(Reservation);
Reservation.belongsTo(User);

Table.hasMany(Reservation);
Reservation.belongsTo(Table);

Meal.hasMany(Preorder);
Preorder.belongsTo(Meal);

Reservation.hasMany(Preorder);
Preorder.belongsTo(Reservation);

syncToDatabase();

export {
  Reservation,
  Preorder,
  Table,
  User,
  Meal
};
