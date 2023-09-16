/*Métodos estáticos são métodos que podem ser acessados fora da classe, sem que a classe seja instanciada para um objeto
Para criar métodos estáticos basta usar a palavra static antes das funções, e depois usar ele com o proprio nome da classe*/

class Calculadora{

    static Somar(a,b){
        console.log(a+b)
    }

    static Subtrair(a,b){
        console.log(a-b)
    }
}   

Calculadora.Somar(10,30)
Calculadora.Subtrair(50,40)