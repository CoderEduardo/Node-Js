/*CONFIGURAÇÃO DO SISTEMA*/
const express = require("express")
const app = express()
const PORTA = 8080
app.set("view engine", "ejs")        //Dizendo para o express usar o ejs com engine
app.use(express.static("public"))    //Dizendo para o express usar a pasta public como caminho para arquivos estáticos
/*********************************************************************************************************************/

/*ROTAS*/
app.get("/", (req, res) => {
    let titulo = "Guia de perguntas"
    res.render("index", {
       titulo:titulo
    })
})

app.get("/perguntar",(req,res)=>{
    let titulo = "Faça sua pegunta"
    res.render("perguntar",{
        titulo:titulo
    })
})

app.post("/salvarpergunta",(req,res)=>{
    res.send("Formulário recebido")
})
/*********************************************************************************************************************/

app.listen(PORTA, () => {
    console.log(`O servidor está rodando na porta ${PORTA}`)
})