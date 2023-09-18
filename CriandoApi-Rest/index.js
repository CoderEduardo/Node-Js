const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const PORTA = 8080

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Banco de dados falso, criado apenas para consulta
const db = {
    games: [
        {
            id: 1,
            title: "Counter Strike Global Ofensive",
            year: 2012,
            price: 94
        },
        {
            id: 2,
            title: "Fifa 18",
            year: 2017,
            price: 400
        },
        {
            id: 3,
            title: "Valorant",
            year: 2020,
            price: 0
        }
    ]
}

app.get("/games", (req, res) => {
    res.statusCode = 200    //Retorna o statusCode
    res.json(db.games)
})

app.listen(PORTA, () => {
    console.log(`API RODANDO`)
})