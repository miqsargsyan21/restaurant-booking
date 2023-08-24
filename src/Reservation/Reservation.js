import { sequelize } from "../Modules/SequelizeModule.js";
import { DataTypes } from "sequelize";

const Reservation = sequelize.define('Reservation', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

export default Reservation;