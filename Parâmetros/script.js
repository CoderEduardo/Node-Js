const express = require("express")
const app = express()
const PORTA = 3001

app.get("/ola/:nome",(req,res)=>{       //Para criar um parêmetro não aleátorio, basta colocar um sinal de interrogação depois do parâmetro: /:nome?
    let nome = req.params.nome          //com req.params.nome conseguimos passar o parâmetro pela url e acessar o valor
    res.send(`<h1>Bom dia ${nome}</h1>`)
})

app.listen(PORTA,()=>{
    console.log(`O servidor está rodando na porta ${PORTA}`)
})