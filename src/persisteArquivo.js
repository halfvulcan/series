'use strict'

const fs = require("fs"),
    arquivo = 'lista.json';

const persisteArquivo = {
    leArquivoOuCriaArquivo: function(){
        if (fs.existsSync(arquivo) == false)
            fs.writeFileSync(arquivo, '[]', { flag: 'w' })
        return JSON.parse(fs.readFileSync(arquivo));
    },
    insereArquivo: function(novaSerie) {
        fs.writeFile(arquivo, novaSerie, function (err) {
            if (err) return console.error(err);
            return novaSerie;
        });
    }
}

module.exports = persisteArquivo;