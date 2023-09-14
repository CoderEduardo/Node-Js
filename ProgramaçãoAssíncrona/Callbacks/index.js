function enviarEmail(corpo,para){
    setTimeout(()=>{
        console.log(`
            Para: ${para}
            -------------
            ${corpo}
            -------------
            De Luis Eduardo
        `)
    },5000)
}

console.log("Email sendo enviado")
enviarEmail("Bom dia, seja bem-vindo","Marcelo")
console.log("O email logo vai chegar para você")
//Esse é um exemplo de programação assíncrona, ou seja, não segue uma linha linear, esperando um ser executado para somente depois executar outra coisa