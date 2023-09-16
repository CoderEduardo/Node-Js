//Usamos os módulo fs para mainpular arquivos com node
const fs = require("fs")

//O primeiro parâmetro passado, nos remete ao diretorio, o segundo ao tipo da leitura do arquivo, e no terceiro recebemos o erro como primeiro parâmetro
//e os dados como segundo
/*fs.readFile("./teste.txt",{encoding:"utf-8"},(erro,dados)=>{
    //verificamos o erro
    if(erro){
        console.log("Ocorreu um erro")
    }else{
        console.log(dados)
    }
})*/

//Essa é uma forma de escrever em um arquivo, sendo o conteúdo passado como o segundo parâmetro
fs.writeFile("./teste.txt", "Novo conteúdo Novamente", (erro) => {
    if(erro){
        console.log(`Ocorreu um erro ${erro}`)
    }
})