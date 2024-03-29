/*CONFIGURAÇÃO DO SISTEMA*/
const express = require("express")
const app = express()
const PORTA = 8080
const connection = require("./database/database")
connection.authenticate().then(()=> console.log("Conexão feita com o bando de dados")).catch(erro => console.log(`Ocorreu um erro ${erro}`))
const Pergunta = require('./database/Pergunta')
const Resposta = require("./database/Resposta")
const bodyParser = require("body-parser")
app.set("view engine", "ejs")        //Dizendo para o express usar o ejs com engine
app.use(express.static("public"))    //Dizendo para o express usar a pasta public como caminho para arquivos estáticos
app.use(bodyParser.urlencoded({extended:false})) //Permite que os dados recebidos sejam decodifcados pelo bodyParser
app.use(bodyParser.json())  //Permite a leitura de dados enviados via json
/*********************************************************************************************************************/

/*ROTAS*/
app.get("/", (req, res) => {
    let cabecalho = "Guia de perguntas"

    Pergunta.findAll({raw:true,order:[
        ['id',"DESC"]   //Para ordenar na foroma crescente use "ASC"
    ]}).then(perguntas => {                //raw:true força uma pesquisa simples no banco, e o then recebe essa pesquisa em um
        res.render("index",{
            cabecalho:cabecalho,
            perguntas:perguntas
        })
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

    Pergunta.create({
        titulo:titulo,
        descricao:descricao
    }).then(()=>{
        res.redirect("/")
    })
    
})

app.get("/pergunta/:id",(req,res) =>{
    let cabecalho = "Responder"
    let id = req.params.id
    Pergunta.findOne({
        where : {id:id}
    }).then(pergunta => {
        if(pergunta != undefined){
            Resposta.findAll({
                where: {perguntaId:pergunta.id},
                order:[['id','DESC']]
            }).then(respostas=>{
                res.render("pergunta",{
                    cabecalho:cabecalho,
                    pergunta:pergunta,
                    respostas:respostas
                })
            })
        }else{
            res.redirect("/")
        }
    })
})

app.post("/responder", (req,res)=>{
    let corpo = req.body.corpo
    let perguntaId = req.body.pergunta

    Resposta.create({
        corpo:corpo,
        perguntaId:perguntaId
    }).then(()=>{
        res.redirect("/pergunta/" + perguntaId)
    })
})
/*********************************************************************************************************************/

app.listen(PORTA, () => {
    console.log(`O servidor está rodando na porta ${PORTA}`)
})