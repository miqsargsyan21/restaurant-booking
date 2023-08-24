import { sequelize } from "../Modules/SequelizeModule.js";
import { DataTypes } from "sequelize";

const Table = sequelize.define('Table', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  seats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

export default Table;