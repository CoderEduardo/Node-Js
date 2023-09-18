const express = require("express")
const app = express()
const connection = require("./database/database")
connection.authenticate().then(()=>{console.log("Banco de dados conctado com sucesso")}).catch(erro=>{console.log(`Ocorreu um erro: ${erro}`)})
const Game = require('./GameController/Game')
const gameController = require("./GameController/gameController")
const bodyParser = require("body-parser")
const axios = require("axios")
const cors = require("cors")
const PORTA = 8080

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/",gameController)

app.listen(PORTA, () => {
    console.log(`API RODANDO`)
})
