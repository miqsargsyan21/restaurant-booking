import { sequelize } from "../Modules/SequelizeModule.js";
import { DataTypes } from "sequelize";

const Meal = sequelize.define('Meal', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

export default Meal;