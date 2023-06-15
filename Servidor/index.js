const http = require("http")
const url = require("url")
const fs = require("fs")

http.createServer((req, res) => {

    let path = url.parse(req.url).pathname
    if (path == "" || path == "/") {
        path = "/index.html"
    }
    let nomeArquivo = "." + path


    fs.readFile(nomeArquivo, (erro, data) => {
        if (erro) {
            res.writeHead(404, { "Content-type": "text/html;charset=utf-8" })
            res.end("<h1>Página não encontrada</h1>")
        } else {
            res.writeHead(200, { "Content-type": "text/html" })
            res.write(data)
            res.end()
        }
    })

}).listen(2000, (erro) => {
    if (erro) {
        console.log(erro)
    } else {
        console.log("Servidor criado na porta 2000")
    }
})