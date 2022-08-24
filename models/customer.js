const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Customer = sequelize.define("customer", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      len:[4,6]
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Customer;