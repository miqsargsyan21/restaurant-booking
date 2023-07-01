import { Sequelize } from "sequelize";
import dotenv from "dotenv";

const {
  MYSQL_HOST: host,
  MYSQL_USER: username,
  MYSQL_PASSWORD: password,
  MYSQL_DATABASE: database,
} = dotenv.config().parsed;

const config = {
  username,
  password,
  database,
  host,
};

const sequelize = new Sequelize({
  ...config,
  dialect: 'mysql',
});

const connectToDatabase = () => {
  sequelize.authenticate()
    .then(() => {
      console.log('Connected to Database');
    })
    .catch(err => {
      console.log(`Error connecting to Database: ${err}`);
    });
};

const syncToDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Synced to Database');
  } catch (err) {
    console.log(`Error syncing to Database: ${err}`);
  }
}

export {
  connectToDatabase,
  syncToDatabase,
  sequelize,
};