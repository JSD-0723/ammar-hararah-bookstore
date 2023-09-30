import { Sequelize } from 'sequelize';
import {
  DB_USERNAME,
  DB_PASSWORD,DB_NAME,
  DB_HOST,DB_PORT,
  HOSTNAME,PORT 
} from './config';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: DB_HOST,
  username: DB_USERNAME,
  database: DB_NAME,
  password: DB_PASSWORD
});

export default sequelize;
