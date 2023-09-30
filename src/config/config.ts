import dotenv from 'dotenv';

dotenv.config();

const {
  JWT_SECRET_OR_KEY,
  JWT_SECRET,DB_USERNAME,
  DB_PASSWORD,DB_NAME,
  DB_HOST,DB_PORT,
  HOSTNAME,PORT
} = process.env;

if ( !JWT_SECRET) {
  throw new Error('Please provide a JWT_SECRET');
}

export {
  JWT_SECRET_OR_KEY,
  JWT_SECRET,DB_USERNAME,
  DB_PASSWORD,DB_NAME,
  DB_HOST,DB_PORT,
  HOSTNAME,PORT 
}