'use strict'

const fs = require("fs"),
      config = require('../config/config'),
      arquivo = config.arquivo.nomeArquivo;
   
const persisteArquivo = {
    leArquivoOuCriaArquivo: function(){
        if (fs.existsSync() == false)
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