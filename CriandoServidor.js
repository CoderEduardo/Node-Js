//Forma de criar um servidor utilizando node js

var http = require('http')

var server = http.createServer(function (req, res) {

    var categoria = req.url

    if (categoria == "/moda") {
        res.end("<html><body>Página de moda</body></html>")
    }
    else if (categoria == "/tecnologia") {
        res.end("<html><body>Tecnologia</body></html>")
    }
    else if (categoria == "/beleza") {
        res.end("<html><body>Beleza</body></html>")
    }
    else {
        res.end("<html><body>Hello Word</body></html>")
    }

})

//Define a porta que sera executada no localhost
server.listen(2000);


