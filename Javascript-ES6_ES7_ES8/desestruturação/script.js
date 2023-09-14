let usuario ={
    nome:"Luis Eduardo",
    idade:18,
    cidade:"Jacutinga",
    empresa:"Microsoft"
}

//Conseguimos desestruturar esses dados de uma forma muito simples, passando eles para variáveis especificas

let {nome,cidade,empresa} = usuario     //é assim que se faz uma desestruturação

console.log(`${nome} ${cidade} ${empresa}`)