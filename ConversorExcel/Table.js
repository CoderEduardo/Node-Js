class Table{
    constructor(arr){
        this.header = arr[0]
        arr.shift() //Método que remove sempre o primeiro elemento de um Array
        this.rows = arr
    }

    get RowCount(){                 //Um método que usa o get, obrigatoriamente vai retornar o valor de alguma coisa
        return this.rows.length     //Retornando o número de linhas como .length
    }

    get ColumnCount(){
        return this.header.length
    }
}

module.exports = Table