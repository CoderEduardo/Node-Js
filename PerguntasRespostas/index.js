/*CONFIGURAÇÃO DO SISTEMA*/
const express = require("express")
const app = express()
const PORTA = 8080
const connection = require("./database/database")
connection.authenticate().then(()=> console.log("Conexão feita com o bando de dados")).catch(erro => console.log(`Ocorreu um erro ${erro}`))
const bodyParser = require("body-parser")
app.set("view engine", "ejs")        //Dizendo para o express usar o ejs com engine
app.use(express.static("public"))    //Dizendo para o express usar a pasta public como caminho para arquivos estáticos
app.use(bodyParser.urlencoded({extended:false})) //Permite que os dados recebidos sejam decodifcados pelo bodyParser
app.use(bodyParser.json())  //Permite a leitura de dados enviados via json
/*********************************************************************************************************************/

/*ROTAS*/
app.get("/", (req, res) => {
    let cabecalho = "Guia de perguntas"
    res.render("index", {
        cabecalho:cabecalho
    })
})

app.get("/perguntar",(req,res)=>{
    let cabecalho = "Faça sua pegunta"
    res.render("perguntar",{
        cabecalho:cabecalho 
    })
})

app.post("/salvarpergunta",(req,res)=>{

    let titulo = req.body.titulo
    let descricao = req.body.descricao

    res.send(`Título: ${titulo}. <br> Descrição: ${descricao}`)
    
})
/*********************************************************************************************************************/

app.listen(PORTA, () => {
    console.log(`O servidor está rodando na porta ${PORTA}`)
})