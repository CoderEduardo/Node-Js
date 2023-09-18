const Reader = require("./Reader")
const leitor = new Reader()
const Processor = require("./Processor")
const Table = require("./Table")
const HtmlParser = require("./HtmlParser")

async function main(){
     let dados = await leitor.Read("./teste.csv")
     let dadosProcessados = Processor.Process(dados)
     let usuarios = new Table(dadosProcessados)
     let html = await HtmlParser.Parse(usuarios)
     console.log(html)
}

main()