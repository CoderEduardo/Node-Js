const Sequelize = require("sequelize")
const connection = require("../database/database")

const Game = connection.define("games",{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false 
    },
    year:{
        type:Sequelize.INTEGER,
        allowNull:false 
    }
})

Game.sync({force:false})

module.exports = Game