const express = require("express")
const app = express()
const PORTA = 8080
const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1/link').then(()=>{
    console.log("Banco de dados conectado com sucesso")
}).catch(erro=>{
    console.log(`Erro ao conectar: ${erro}`)
})

app.listen(PORTA,()=>{
    console.log(`O servidor está rodando na porta ${PORTA}`)
})