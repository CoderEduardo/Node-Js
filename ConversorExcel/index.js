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
/*fs.writeFile("./teste.txt", "Novo conteúdo Novamente", (erro) => {
    if(erro){
        console.log(`Ocorreu um erro ${erro}`)
    }
})*/

/*Conseguimos passar valores para o nosso arquivo, para adicionar um atributo novo no json, precisamos converter a string recebida em um json, e para
isso usamos o JSON.parse(), depois de atribuit os respectivos valores, precisamos ler o arquivo como uma string, e para isso usamos o JSON.stringify()*/
function modificarUsuario(nome,curso,categoria){
    fs.readFile("./usuario.json",{encoding:"utf-8"},(erro,dados)=>{
        if(erro){
            console.log(`Ocorreu um erro ${erro}`)
        }else{
            /*Essa é uma forma de let um arquivo json e modificar os seus atributos*/
            let conteudo = JSON.parse(dados)
            conteudo.nome = nome 
            conteudo.curso = curso
            conteudo.categoria = categoria
            fs.writeFile("./usuario.json",JSON.stringify(conteudo),erro=>{
                if(erro){
                    console.log(`Ocorreu um erro: ${erro}`)
                }
            })
        }
    })
}

modificarUsuario("Joaquin","Enfermagem","Area da saúde")