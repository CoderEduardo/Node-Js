const express = require("express")
const app = express()
const PORTA = 8080

app.set("view engine","ejs")        //Dizendo para o express usar o ejs com engine

app.get("/", (req, res) => {
    let nome = "Luis Eduardo"
    let linguagem = "JS"
    res.render("index",{
        nome:nome,
        linguagem:linguagem
    })
})

app.listen(PORTA,()=>{
    console.log(`O servidor está rodando na porta ${PORTA}`)
})