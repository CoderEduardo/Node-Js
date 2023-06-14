const sharp = require("sharp")

let diretorio = process.argv[2]
let width = Number(process.argv[3])

console.log(diretorio, width)

function redimensionar(diretorio, width) {

    sharp(diretorio).resize({ width: width }).toFile("./temp/outuput_risize.jpg", (error) => {
        if (error) {
            console.log(error)
        } else {
            console.log("Imagem redimensionada com sucesso")
        }
    })

}

redimensionar(diretorio,width)

