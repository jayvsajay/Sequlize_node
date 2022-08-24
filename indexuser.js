const Sequelize = require('sequelize');
const practice = require('./practice');
const Sequelizecode = require('./user');
const sequelize = new Sequelize('sequelize1', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
})

Sequelizecode(sequelize);