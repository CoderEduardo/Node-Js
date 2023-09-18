const Reader = require("./Reader")
const leitor = new Reader()
const Processor = require("./Processor")
const Table = require("./Table")

async function main(){
     let dados = await leitor.Read("./teste.csv")
     let dadosProcessados = Processor.Process(dados)
     let usuarios = new Table(dadosProcessados)
     console.log(usuarios.rows)
}

main()