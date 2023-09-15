class Filme {

    constructor() {
        //Defindo os atributos de uma classe
        this.titulo = ""
        this.ano = 0
        this.genero = ""
        this.diretor = ""
        this.atores = []
        this.duracao = 0

    }

    Reproduzir() {
        console.log("Reproduzindo")
    }

    Pausar() {
        console.log("Pausado")
    }

    Avancar() {
        console.log("Avançando")
    }

    Retroceder(){
        console.log("Retrocedendo")
    }

    Fechar() {
        console.log("Fechado")
    }

}

let vingadores = new Filme()    //Criando um objeto
let starWars = new Filme()

vingadores.Reproduzir() //Acessando métodos
starWars.Fechar()
console.log(`Tempo: ${vingadores.duracao}`) //Acessando atributos