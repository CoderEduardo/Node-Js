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

app.get("/game/:id", (req, res) => {
    let id = parseInt(req.params.id)
    if (isNaN(id)) {
        res.sendStatus(400) //Se o valor que for passador não for um número, ele vai retornar esse status code
    } else {
        let game = db.games.find(game => game.id == id)
        if (game != undefined) {
            res.statusCode = 200
            res.json(game)
        } else {
            res.sendStatus(404)
        }
    }
})

app.post("/game", (req, res) => {
    let { title, price, year, id } = req.body
    if (title == undefined || isNaN(price) || isNaN(year) || isNaN(id) ) {
        res.sendStatus(400)
    } else {
        db.games.push({
            id: id,
            title: title,
            price: price,
            year: year
        })

        res.sendStatus(200)
    }
})

app.listen(PORTA, () => {
    console.log(`API RODANDO`)
})