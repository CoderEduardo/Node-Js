//Forma tradicional de se passar valores para um Json
/*
let nome = "Luis"
let idade = 18
let empresa = "Microsft"

let usuario ={
    nome:nome,
    idade:idade,
    empresa:empresa
}*/

//Forma encurtada

let nome = "Luis"
let idade = 18
let empresa = "Microsft"

let usuario ={
    nome,
    idade,
    empresa 
}

console.log(usuario)

/*Dessa forma encurtada antigimos o mesmo resultado, porém gastando menos código*/ 