function pegarUsuarios() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve([
                { nome:"Luis Eduardo"},
                { nome:"Caio Henrique"},
                { nome:"Thomas"},
                { nome:"Myrela"}
            ])
        }, 3000)
    })

}

console.log("Teste1")

async function principal() {
    let usuarios = await pegarUsuarios()
    console.log(usuarios)
}
principal()

console.log("Teste2")
