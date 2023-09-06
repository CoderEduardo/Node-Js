const Sequelize = require("sequelize")
const connection = require("./database")

const Pergunta = connection.define("perguntas", {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Pergunta.sync({force:false})  //Cria a tabela se ela não foi criada ainda