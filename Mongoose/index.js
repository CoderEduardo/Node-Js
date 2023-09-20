const express = require("express")
const app = express()
const PORTA = 8080
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const Link = require("./models/Link")
const linksController = require("./routes/links")
const ejs = require("ejs")
app.set("view engine",'ejs')

app.use("/",linksController)


mongoose.connect('mongodb://127.0.0.1/link').then(() => {
    console.log("Banco de dados conectado com sucesso")
}).catch(erro => {
    console.log(`Erro ao conectar: ${erro}`)
})

app.listen(PORTA, () => {
    console.log(`O servidor está rodando na porta ${PORTA}`)
})