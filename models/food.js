const Sequelize = require("sequelize");
const db = require("../config/database")

const Food = db.define("hotfood", {
 
    title: {
        type: Sequelize.STRING
    },
    ingredients: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    }
}, {
    //makes singular table name instead of plural
    freezeTableName: true
});

module.exports = Food;