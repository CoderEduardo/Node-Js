const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")
connection.authenticate().then(()=>{console.log("Bando de dados conectado")}).catch(erro => {console.log(`Ocorreu algum erro: ${erro}`)})
const categoriesControllers = require('./categories/categoriesControllers')
const articlesControllers = require("./articles/articlesControllers")
const Article = require("./articles/Article")
const Category = require('./categories/Category')
const PORTA = 8080

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json()) 
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("index")
})

app.use("/",categoriesControllers)
app.use('/',articlesControllers)

app.listen(PORTA,()=>{
    console.log(`Servidor rodando na porta ${PORTA}`)
})