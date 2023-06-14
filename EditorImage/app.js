const sharp = require("sharp")
const compress_images = require("compress-images")
const fs = require('fs')
const path = require("path")

let diretorio = process.argv[2]
let width = Number(process.argv[3])

console.log(diretorio, width)

function redimensionar(diretorio, saidaImage ,width) {

    sharp(diretorio).resize({ width: width }).toFile(saidaImage, (error) => {
        if (error) {
            console.log(error)
        } else {
            console.log("Imagem redimensionada com sucesso")
            comprimirImage(saidaImage,"./comprimida/")
        }
    })
}

function comprimirImage(diretorioImage,saidaImage){

    compress_images(diretorioImage, saidaImage, { compress_force: false, statistic: true, autoupdate: true }, false,
        { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
        { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
        { svg: { engine: "svgo", command: "--multipass" } },
        { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
function (error, completed, statistic) {
console.log("-------------");
console.log(error);
console.log(completed);
console.log(statistic);
console.log("-------------");

fs.unlink(diretorioImage, (error) =>{
    if(error){
        console.log(error)
    }else{
        console.log(diretorioImage + " Apagado")
    }
})

}
);

}

redimensionar(diretorio,"./temp/output_resize.jpg",width)

