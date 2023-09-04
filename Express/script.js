const express = require("express")
const app = express()
const PORTA = 3001

app.listen(PORTA,()=>{
    console.log(`O servidor está rodando na porta ${PORTA}`)
})