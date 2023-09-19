const express = require("express")
const app = express()
const PORTA = 8080
const connection = require("./database/database")
connection.authenticate().then(()=>{console.log("Banco de dados conectado")}).catch(erro=>{console.log(`Ocorreu um erro: ${erro}`)})
const User = require("./controller/User")

app.listen(PORTA,()=>{
    console.log(`Servidor rodando na porta ${PORTA}`)
})