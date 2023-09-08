const Sequelize = require("sequelize")
const connection = require('../database/database')

const Category = connection.define("categories",{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    slug:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

//Rodar apenas uma vez, pois se não ele vai ficar criando várias tabelas
//Category.sync({force:true})

module.exports = Category