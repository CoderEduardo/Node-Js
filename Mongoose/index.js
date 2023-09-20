const express = require("express")
const app = express()
const PORTA = 8080
const mongoose = require("mongoose")

const linkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    url: {
        type: String,
        required: true
    },
    click: {
        type: Number,
        default: 0
    }
})

const Link = mongoose.model("Link", linkSchema)

app.get("/:title", async (req, res) => {
    let title = req.params.title
    try {
        let link = await Link.findOne({ title })
        res.redirect(link.url)
    } catch (error) {
        res.send(error)
    }
})


mongoose.connect('mongodb://127.0.0.1/link').then(() => {
    console.log("Banco de dados conectado com sucesso")
}).catch(erro => {
    console.log(`Erro ao conectar: ${erro}`)
})

app.listen(PORTA, () => {
    console.log(`O servidor está rodando na porta ${PORTA}`)
})