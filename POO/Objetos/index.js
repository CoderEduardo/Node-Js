class Filme {

    constructor(titulo,ano,genero,diretor,duracao) {
        //Defindo os atributos de uma classe
        this.titulo = titulo 
        this.ano = ano
        this.genero = genero 
        this.diretor = diretor 
        this.atores = []
        this.duracao = duracao

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
let batman = new Filme("Batman",2000,"Ação","Zé da manga","2 horas e 50 minutos")   //Passando os valores por parâmetros pelo construtor

vingadores.Reproduzir() //Acessando métodos
starWars.Fechar()
vingadores.titulo = "Vingadores"    //Definindo valores aos atributos
vingadores.genero = "Ação"
console.log(`Nome: ${vingadores.titulo}, gênero: ${vingadores.genero}`) //Acessando atributos
console.log(`Filme: ${batman.titulo}, Ano: ${batman.ano}, Gênero: ${batman.genero}, Diretor: ${batman.diretor}, Duração: ${batman.duracao}`)