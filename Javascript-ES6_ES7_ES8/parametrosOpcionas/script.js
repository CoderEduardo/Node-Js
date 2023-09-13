/*
    Parâmetro opcionas servem para passar um padrão por base, ou seja, se o usuário passar só um valor, o proximo valor é o número 50, que já está 
    predefinido, mas se o usuário passar algum valor, a conta será feita com o valor passado por ele
*/
function soma(a, b = 50) {
    console.log(a + b)
}