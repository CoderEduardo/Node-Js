const Reader = require("./Reader")
const leitor = new Reader()

async function main(){
     let dados = await leitor.Read("./teste.csv")
     console.log(dados)
}

main()