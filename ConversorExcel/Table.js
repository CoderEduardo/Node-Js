class Table{
    constructor(arr){
        this.header = arr[0]
        arr.shift() //Método que remove sempre o primeiro elemento de um Array
        this.rows = arr
    }
}

module.exports = Table