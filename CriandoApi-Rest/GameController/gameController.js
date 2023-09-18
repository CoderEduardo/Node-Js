const express = require("express")
const router = express.Router()
const Game = require("./Game")

router.get("/games",(req,res)=>{
    Game.findAll().then(games=>{
        if(games.length == 0){
            res.send("Não existem jogos registrados ainda")
        }else{
            res.send(games)
            res.statusCode = 200
        }
    })
})

router.post("/game",(req,res)=>{
    let {title,year,price} = req.body
    if(title == undefined || isNaN(year) || isNaN(price)){
        res.sendStatus(400)
    }else{
        Game.create({
            title:title,
            year:year,
            price:price
        }).then(()=>{
            res.sendStatus(200)
        }).catch(()=>{
            res.sendStatus(404)
        })
    }
})

router.delete("/game/:id",(req,res)=>{
    let id = req.params.id 
    if(isNaN(id)){
        res.sendStatus(404)
    }else{
        Game.destroy({
            where:{id:id}
        }).then(()=>{
            res.sendStatus(200)
        })
    }
})

module.exports = router