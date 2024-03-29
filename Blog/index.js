const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const session = require("express-session")
const connection = require("./database/database")
connection.authenticate().then(() => { console.log("Bando de dados conectado") }).catch(erro => { console.log(`Ocorreu algum erro: ${erro}`) })
const categoriesControllers = require('./categories/categoriesControllers')
const articlesControllers = require("./articles/articlesControllers")
const userControllers = require("./user/UserController")
const Article = require("./articles/Article")
const Category = require('./categories/Category')
const User = require("./user/User")
const PORTA = 8080

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static("public"))
app.use(session({
    secret:"banana",
    cookie:{maxAge:(1000 *60)*30}
}))

app.get("/", (req, res) => {
    Article.findAll({ order: [['id', 'DESC']],limit:4 }).then(articles => {
        Category.findAll().then(categories => {
            res.render("index", { articles: articles, categories: categories })
        })
    })
})

app.get("/:slug", (req, res) => {
    let slug = req.params.slug
    Article.findOne({
        where: { slug: slug }
    }).then(article => {
        if (article != undefined) {
            Category.findAll().then(categories => {
                res.render("article", { article: article, categories: categories })
            })
        } else {
            res.redirect("/")
        }
    }).catch(() => {
        res.redirect("/")
    })
})

app.get("/category/:slug", (req, res) => {
    let slug = req.params.slug

    Category.findOne({
        where: { slug: slug },
        include: [{ model: Article }]
    }).then(category => {
        if (category != undefined) {
            Category.findAll().then(categories => {
                res.render("index", { articles: category.articles, categories: categories })
            })
        } else {
            res.redirect("/")
        }
    })
})

app.use("/", categoriesControllers)
app.use('/', articlesControllers)
app.use('/',userControllers)

app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`)
})