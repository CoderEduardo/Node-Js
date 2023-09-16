/*Composição é uma forma de se escrever classes, em que as classes escritas poderam ser utilizadas em outras classes, ou seja, se torna muito fácil a 
reutilização de códigos*/

class Leitor{
    Ler(caminho){
      console.log("Conteúdo do arquivo")
    }
}

class Escritor{
    Escrever(){
        console.log("Conteúdo escrito")
    }
}

class Criador{
    Criar(){
        console.log("Arquivo criado")
    }
}

class Destruidor{
    Destruir(){
        console.log("Arquivo destruido")
    }
}

//Essa é uma forma de usar classes externas em uma classe especifica

class ManipuladorDeArquivo{
    constructor(nome){
        this.arquivo = nome 
        this.leitor = new Leitor()
        this.escritor = new Escritor()
        this.criador = new Criador()
        this.destruidor = new Destruidor()
    }
}

class GerenciarUsuarios{
    constructor(){
        this.leitor = new Leitor()
        this.escritor = new Escritor()
    }
}

let Gerenciador = new GerenciarUsuarios()
let Manipulador = new ManipuladorDeArquivo("meuarquivo.txt")

//Usuando a composição, para pegar duas classes externas e colocando dentro de outras duas classes diferentes, utilizando o mesmo código.
Gerenciador.escritor.Escrever()
Gerenciador.leitor.Ler()
console.log("-----------------------")
Manipulador.leitor.Ler()
Manipulador.escritor.Escrever()
Manipulador.criador.Criar()
Manipulador.destruidor.Destruir()

