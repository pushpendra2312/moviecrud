const Sequelize = require("sequelize");
const sequelize = new Sequelize('moviescrud', 'postgres', 'Sahil123', {
  // The `host` parameter is required for other databases
  host: "localhost",
  dialect: "postgres",
  //   storage: "./database.sqlite",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;
