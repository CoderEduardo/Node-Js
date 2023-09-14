function enviarEmail(corpo,para,callback){
    setTimeout(()=>{
        console.log(`
            Para: ${para}
            -------------
            ${corpo}
            -------------
            De Luis Eduardo
        `)
        callback("Luis Eduardo",18)
    },5000)
}

console.log("Email sendo enviado")
enviarEmail("Bom dia, seja bem-vindo","Marcelo",(nome,idade)=>{
    console.log(`Função de callback chamada, com os parâmetros ${nome} e ${idade}`)
})
console.log("O email logo vai chegar para você")
//Esse é um exemplo de programação assíncrona, ou seja, não segue uma linha linear, esperando um ser executado para somente depois executar outra coisa

//Uma função de callback só é executada depois de uma outra função ser executada, ela espera a reposta de uma para depois ela rodar