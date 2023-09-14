function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let deuErro = true
            if (!deuErro) {
                resolve({mensagem1:"Deu certo",mensagem2:"Deu bom"}) //Podemos passar parâmetros para enviar para o then
            } else {
                reject("Deu errado aqui parceiro")  //Podemos passar parâmetros para enviar para o catch
            }
        }, 4000);

    })
}

enviarEmail("Olá mundo","Luis Eduardo").then(dados=>{
    console.log(dados.mensagem2)
}).catch(erro=>{
    console.log(erro)
})

/*
A Promise executa o then quando é retornado o resolve(), e executa o catch quando é retornado o reject()

Ao passar parâmetros para uma Promise, os parâmetros passados pelo resolve serão referentes ao then, e os parâmetros passados pelo reject serão referentes
ao catch
*/
