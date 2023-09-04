//Os módulos servem para recortar o seu programa em pedaços, deixando ele mais organizado e separado em diversas formas
const calculadora = require("./calculadora")

console.log(calculadora.soma(10,2))
console.log(calculadora.sub(10,2))
console.log(calculadora.mult(10,2))
console.log(calculadora.div(10,2))

//Dessa forma conseguimos usar funções que estão em outro modulo
