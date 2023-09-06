const express = require("express")
const app = express()
const PORTA = 8080

app.set("view engine", "ejs")        //Dizendo para o express usar o ejs com engine
app.use(express.static("public"))

app.get("/", (req, res) => {
      

    res.render("index", {
       
    })
})

app.get("/perguntar",(req,res)=>{
    res.render("perguntar")
})

app.listen(PORTA, () => {
    console.log(`O servidor está rodando na porta ${PORTA}`)
})