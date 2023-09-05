const express = require("express")
const app = express()
const PORTA = 8080

app.set("view engine", "ejs")        //Dizendo para o express usar o ejs com engine

app.get("/", (req, res) => {
    let nome = "Luis Eduardo"
    let linguagem = "JS"
    let exibirMsg = true
    let produtos = [
        { nome: "Doritos", preco: 5 },
        { nome: "Cola-cola", preco: 7 },
        { nome: "Leite", preco: 3 }
    ]

    res.render("index", {
        nome: nome,
        linguagem: linguagem,
        msg: exibirMsg,
        produtos:produtos
    })
})

app.listen(PORTA, () => {
    console.log(`O servidor está rodando na porta ${PORTA}`)
})