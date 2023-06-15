const http = require("http")

http.createServer((req,res) => {

    res.writeHead(200,{'Content-type':'text/html'})
    res.end("<h1>Hello World</h1>")

}).listen(3000,(erro) => {
    if(erro){
        console.log(erro)
    }else{
        console.log("Servidor rodando na porta 3000")
    }
})