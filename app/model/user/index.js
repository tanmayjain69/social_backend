const config = require('../../config/db.config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db_pro = {};

db_pro.Sequelize = Sequelize;
db_pro.sequelize = sequelize;

db_pro.userpro = require('./user.model')(sequelize, Sequelize);

module.exports = db_pro;
