const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  HOST: process.env.PG_HOST,
  USER: process.env.PG_USER,
  PASSWORD: process.env.PASSWORD,
  DB: 'testdb',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
