const express = require("express")
const app = express()
const path = require("path")
//const gerarNumero = require("./gerarNumero")
const PORTA = 3000

app.use(express.static(path.join(__dirname, "client")))

app.get("/gerarNumero", (req, res) => {
    res.send(console.log("Deu certo"))
})

app.listen(PORTA, () => {
    console.log(`Servidor criado na porta: ${PORTA}`)
})