const express = require("express")
const router = express.Router()

router.get("/categorias",(req,res)=>{
    res.send("PÁGINA DE CATEGORIAS")
})

module.exports = router