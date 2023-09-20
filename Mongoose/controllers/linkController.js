const Link = require("../models/Link")

const redirect = async (req, res) => {
    let title = req.params.title
    try {
        let link = await Link.findOne({ title })
        res.redirect(link.url)
    } catch (error) {
        res.send(error)
    }
}

const addLink = async (req, res) => {
    let link = new Link(req.body)

    try {
        let doc = await link.save()
        res.send("Link Adicionado com sucesso")
    } catch (error) {
        res.render("index",{error,body:req.body})
    }
}

module.exports = { redirect, addLink }