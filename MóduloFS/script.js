//O módulo do node fs serve para criarmos e modificarmos arquivos
let fs = require('fs')

//O primero parâmetro é o nome, o segundo é o conteúdo, e em terceiro é uma função de callbak
//Sempre que usamos o writeFile ele cria um arquivo do zero com esse nome
//fs.writeFile("teste.txt","Olá mundo",erro)

//Para atualizar um arquivo, ou concatenar um texto novo ao seu arquivo já criado, use o appendFile
//fs.appendFile("teste.txt"," Arquivo atualizado",erro)

//Para deletar um arquivo, use o unlink
//fs.unlink("teste.txt",erro)

/*Para renomar um arquivo já criado use o nome, o primeiro parâmetro é o nome antigo, e o segundo é o nome novo
fs.rename('teste.txt',"NovoNome.txt",erro)*/

//Para ler um arquivo usamos o readFile, em primeiro passamos o nome do arquivo, depois passamos como queremos que esse arquivo seja mostrado.
fs.readFile("teste.txt","utf-8", function (error,data){
    if(error){
        throw error
    }
    console.log(data)
})

function erro(erro){
    if (erro){
        throw erro
    }
    console.log("Deu tudo certo")
}
