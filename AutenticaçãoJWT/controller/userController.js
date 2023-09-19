const express = require("express")
const router = express.Router()
const User = require("./User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

//Aqui está declardo a sua senha ultra secreta
const JWTSecret = "1234"

function auth(req,res,next){

    const authToken = req.headers['authorization']

    if(authToken != undefined){

        const bearer = authToken.split(' ')
        const token = bearer[1]
        jwt.verify(token,JWTSecret,(erro,data)=>{
            if(erro){
                res.status(401)
                res.json({erro:"Token inválido"})
            }else{
                req.token = token
                req.loggeUser = {id:data.id,email:data.email}
                next()
            }
        })

    }else{
        res.status(401)
        res.json({erro:"Token inválido"})
    }
    next()

}

router.get("/games",auth,(req,res)=>{
    res.statusCode = 200
    res.send("Olá mundo")
})

router.get("/auth", (req, res) => {
    let = { email, senha } = req.body

    if (email != undefined) {
        User.findOne({
            email:email
        }).then(usuario=>{
            if(usuario!=undefined){
                let correto = bcrypt.compareSync(senha,usuario.senha)
                if(correto){
                    jwt.sign({id:usuario.id,email:usuario.email},JWTSecret,{expiresIn:"1h"},(erro,token)=>{//Dentro desse método eu consigo passar qualquer valor para o meu token
                        if(erro){
                            res.sendStatus(400)
                        }else{
                            res.status(200)
                            res.json({token:token})
                        }
                    })   
                    res.sendStatus(200)
                }else{
                    res.sendStatus(400)
                }
            }else{
                res.send(404)
            }
        })
    } else {
        res.sendStatus(400)
    }
})

router.post("/usuario",auth,(req,res)=>{
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