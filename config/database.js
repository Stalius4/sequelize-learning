

const Sequelize = require("sequelize")

// instead of const db use module.exports to be able access it o different file
module.exports = new Sequelize('manesql', 'Deivydas',"12345", {
    host: 'localhost',
    dialect: 'mysql',

  });