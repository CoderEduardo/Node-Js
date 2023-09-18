class Processor{
    static Process(data){
        let a = data.split("\r\n")    //.split é uma metódo de array que quebra strings, nesse caso está quebrando em linha
        let rows = []

        a.forEach(row => {
            let arr = row.split(",")
            rows.push(arr)
        });

        return rows
    }
}

module.exports = Processor