const Sequelize = require("sequelize")
const connection = require('../database/database')
const Category = require("../categories/Category")

const Article = connection.define("articles",{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    slug:{
        type:Sequelize.STRING,
        allowNull:false
    },
    body:{
        type:Sequelize.TEXT,
        allowNull:false
    }
})

Category.hasMany(Article)            //Diz que uma categoria tem muitos artigos
Article.belongsTo(Category)         //Diz que todo artigo pertence a uma categoria

//Rodar apenas uma vez, pois se não ele vai ficar criando várias tabelass
//Article.sync({force:true})

module.exports = Article