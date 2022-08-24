const Sequelize = require("sequelize");

const sequelize = new Sequelize("sqlcrud", "root", "password", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;