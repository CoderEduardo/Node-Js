const Reader = require("./Reader")
const leitor = new Reader()
const Processor = require("./Processor")

async function main(){
     let dados = await leitor.Read("./teste.csv")
     let dadosProcessados = Processor.Process(dados)
}

main()