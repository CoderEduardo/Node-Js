/*Com o Operador Spread, "...empresa", o json usuários recebe os campos de variável empresa de forma nativa, assumindo esses campos para ele mesmo*/

let nome = "Luis"
let idade = 18
let empresa = {
    nomeEmpresa: "Microsft",
    cidade:"Jacutinga",
    site:"www.microgames"
}

let usuario ={
    nome,
    idade,
    ...empresa 
}

console.log(usuario)