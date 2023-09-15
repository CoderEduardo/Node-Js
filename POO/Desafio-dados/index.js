class Cassino {

    static GerarDadoAleatorio(numero) {
        let min = 1
        let max = parseInt(numero)
        let resultado = Math.floor((Math.random() * (max - min + 1))) + min
        console.log(`O número que o dado sorteou foi ${resultado}`)
    }

}

Cassino.GerarDadoAleatorio(10)