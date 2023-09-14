function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let deuErro = false
            if (!deuErro) {
                resolve()
            } else {
                reject()
            }
        }, 4000);

    })
}

enviarEmail("Olá mundo","Luis Eduardo").then(()=>{
    console.log("Processo feito com sucesso")
}).catch((erro)=>{
    console.log(`Ocorreu um erro ${erro}`)
})

/*A Promise executa o then quando é retornado o resolve(), e executa o catch quando é retornado o reject()*/