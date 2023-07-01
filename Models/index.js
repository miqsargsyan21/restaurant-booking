import { syncToDatabase } from "../Modules/SequelizeModule.js";
import Reservation from "./Reservation.js";
import Table from "./Table.js";
import User from "./User.js";

User.hasMany(Table);
Table.belongsTo(User);

User.hasMany(Reservation);
Reservation.belongsTo(User);

Table.hasMany(Reservation);
Reservation.belongsTo(Table);

syncToDatabase();

export { Reservation, Table, User };
