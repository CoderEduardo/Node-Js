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

module.exports = {redirect}