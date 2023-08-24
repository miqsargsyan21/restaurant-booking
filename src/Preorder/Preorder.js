import { sequelize } from "../Modules/SequelizeModule.js";
import { DataTypes } from "sequelize";

const Preorder = sequelize.define('Preorder', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default Preorder;