const fs = require("fs")

class Reader {

    Read(filepath) {
        fs.readFile(filepath, { encoding: 'utf-8' }, (erro, data) => {
            if (erro) {
                console.log(`Ocorreu um erro ${erro}`)
            } else {
                console.log(data)
            }
        })
    }

}

module.exports = Reader