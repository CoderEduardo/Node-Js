const express = require("express")
const router = express.Router()
const User = require("./User")
const bcrypt = require("bcryptjs")

/*router.get("/auth", (req, res) => {
    let = { email, senha } = req.body

    if (email != undefined) {

    } else {
        res.sendStatus(400)
    }
})*/

router.post("/usuario",(req,res)=>{
    let {nome,email,senha} = req.body
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(senha,salt)
    User.create({
        nome:nome,
        email:email,
        senha:hash
    }).then(()=>{
        res.sendStatus(200)
    }).catch(()=>{
        res.sendStatus(404)
    })
})

module.exports = router