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

    Fechar() {
        console.log("Fechado")
    }

}

class Produto {

    constructor() {
        this.nome = ""
        this.preco = 0
        this.quatidade = 0
        this.estoque = 0
        this.tipo = ""
        this.peso = 0
    }

    Vender() {
        console.log("Vendido")
    }

    Trocar() {
        console.log("Trocando")
    }

    Devolver() {
        console.log("Devolvido")
    }

}

class Carrinho {

    constructor() {
        this.quantidade = 0
        this.precos = []
        this.precoTotal = 0
        this.nomes = []
    }

    Adicionar() {
        console.log("Produto adicionado")
    }

    Retirar() {
        console.log("Produto retirado")
    }

    Comprar() {
        console.log("Produtos comprados")
    }

}

class ComidaCardapio {

    constructor() {
        this.nome = ""
        this.quatidade = 0
        this.preco = 0
        this.tipo = ""
    }

    Pedir() {
        console.log("Pedido feito")
    }

    Cancelar() {
        console.log("Pedido Cancelado")
    }

    Devolver() {
        console.log("Pedido Devolvido")
    }

}

class PersonagemRpg {

    constructor() {
        this.nome = ""
        this.categoria = ""
        this.nivel = 0
        this.peso = 0
        this.altura = 0
        this.sexo = ""
    }

    Andar() {
        console.log("Andado")
    }

    Pular() {
        console.log("Pulando")
    }

    Agachar() {
        console.log("Agachando")
    }

    Atacar() {
        console.log("Atacando")
    }

    Defender() {
        console.log("Defendedo")
    }

}

//Sistema de carros para Aluguel
class Carro {

    constructor() {
        this.nome = ""
        this.ano = 0
        this.valorHora = 0
        this.potencia = 0
    }

    Alugar() {
        console.log("Alugado")
    }

    Devolver() {
        console.log("Carro devolvido")
    }

}

//Usuário para rede social 
class Usuario {

    constructor() {
        this.id = 0
        this.nome = ""
        this.postagens = []
        this.amigos = []
        this.bloqueados = []
        this.curtidos = []
        this.seguidores = []
        this.aniversario = 0
        this.status = ""
        this.sexo = ""
        this.verificado = ""
    }

    Follow() {
        console.log("Amigo adicionado")
    }

    Unfollow() {
        console.log("Deixando de seguir")
    }

    Bloquear() {
        console.log("Usuário bloqueado")
    }

    Postar() {
        console.log("Postagem feita")
    }

    Apagar() {
        console.log("Apagar Postagem")
    }

}

//Vídeo para serviço de streaming
class Video {

    constructor() {
        this.nome = ""
        this.produtora = ""
        this.duracao = 0 
        this.participantes = []
        this.comentarios = []
        this.curtidas = []
        this.descurtidas = []
    }

    Reproduzir(){
        console.log("Vídeo Reproduzindo")
    }

    Pausar(){
        console.log("Vídeo pausado")
    }

    Adiantar(){
        console.log("Vídeo adiantado")
    }

    Atrasar(){
        console.log("Vídeo atrasado")
    }

    Velocidade(){
        console.log("Velocidade do vídeo alterada")
    }

    Comentar(){
        console.log("Comentando no vídeo")
    }

    Curtir(){
        console.log("Vídeo Curtido")
    }

    Descurtir(){
        console.log("Vídeo descutido")
    }

}

//Aluno para sistema de gestão escolar
class Aluno{

    constructor(){
        this.nome = ""
        this.notas = []
        this.media = 0
        this.idade = 0
        this.sexo = ""
        this.frequencia = 0
    }

    Cadastrar(){
        console.log("Aluno Cadastrado")
    }

    Sair(){
        console.log("Aluno saiu da escola")
    }

}

class Banda{

    constructor(){
        this.nome 
        this.integrantes = []
        this.albuns = []
        this.estilo = ""
        this.musicas = []
        this.atividade = ""
    }

    LancarMusicas(){
        console.log("Músicas lançada")
    }

    LancarAlbum(){
        console.log("Albúm lançado")
    }

}


