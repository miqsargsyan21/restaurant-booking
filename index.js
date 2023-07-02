import { connectToDatabase } from "./Modules/SequelizeModule.js";
import swaggerUi from 'swagger-ui-express';
import Routes from "./Routes/index.js";
import bodyParser from "body-parser";
import express from 'express';
import dotenv from 'dotenv';
import yaml from 'yamljs';

let { PORT: port } = dotenv.config().parsed;
port = port - 0 || 3000;

const swaggerDocument = yaml.load('./swagger.yaml');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use('/api', Routes);

connectToDatabase();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});