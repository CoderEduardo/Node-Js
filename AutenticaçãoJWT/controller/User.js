const Sequelize = require("sequelize")
const connection = require("../database/database")

const User = connection.define("usuarios",{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    senha:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

User.sync({force:false})
module.exports = User