const Sequelize = require("sequelize")
const database = "guiapress"
const user = "root"
const password = "bancodedados1234"

const connection = new Sequelize(database,user,password,{
    host:"localhost",
    dialect:"mysql"
})

module.exports = connection