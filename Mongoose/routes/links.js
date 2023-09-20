const express = require("express")
const router = express.Router()
const linkController = require("../controllers/linkController")

router.get("/add",(req,res)=>{
    res.render("index",{error:false,body:{}})
})

router.get("/edit/:id",linkController.loadLink)

router.post("/edit/:id",linkController.editLink)

router.get("/",linkController.allLinks)

router.get("/:title",linkController.redirect)

router.post("/", linkController.addLink)

router.delete("/:id",linkController.deleteLink)

router.delete("/",linkController.deleteLink)

module.exports = router