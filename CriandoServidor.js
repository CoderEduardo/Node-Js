//Forma de criar um servidor utilizando node js

var http = require ('http')

var server = http.createServer(function(req, res){
    res.end("<html><body>Hello Word</body></html>")
})

//Define a porta que sera executada no localhost
server.listen(2000);


