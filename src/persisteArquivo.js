'use strict'

const fs = require("fs"),
    arquivo = 'lista.json';

exports.leArquivo = function (lista) {
    if (fs.existsSync(arquivo) == false) fs.writeFileSync(arquivo, '[]', { flag: 'w' });
    let listaSeries = fs.readFileSync(arquivo);
    listaSeries = JSON.parse(listaSeries);
    return listaSeries;
};

exports.insereArquivo = function (novaSerie) {
    fs.writeFile(arquivo, novaSerie, function (err) {
        if (err) return console.error(err);
        return novaSerie;
    });
}