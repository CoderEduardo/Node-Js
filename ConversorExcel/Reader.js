const fs = require("fs")
const util = require("util")    //Nos dá acesso a várias coisas interessantes
class Reader { 

    constructor(){
        this.reader = util.promisify(fs.readFile)       //promisify transforma uma função antiga em uma promisse, nos dando a capacidade de usar async
    }

    async Read(filepath) {
        try {
            return await this.reader(filepath,{encoding:"utf-8"})
        } catch (error) {
            return undefined
        }
    }

}
module.exports = Reader