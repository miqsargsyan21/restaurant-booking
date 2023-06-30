import dotenv from "dotenv";
import mysql from 'mysql';

const {
  MYSQL_HOST: host,
  MYSQL_USER: user,
  MYSQL_PASSWORD: password,
  MYSQL_DATABASE: database,
} = dotenv.config().parsed;

const config = {
  host,
  user,
  password,
  database,
};

const connection = mysql.createConnection(config);

const dbInit = () => {
  connection.connect((err) => {
    if (err) {
      console.log(`Error connecting to MySQL: ${err}`);
    } else {
      console.log('Connected to MySQL');
    }
  });
}

export { dbInit };