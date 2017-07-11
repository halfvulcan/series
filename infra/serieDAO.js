'use strict'
const connection = require('./createDBConnection');

const serieDAO = {
    listagem: function (callback) {
        connection.query("SELECT * FROM series", function (err, rows, fields) {
            if (err) throw err;
            callback(rows);
        });
    },
    insere: function (serie) {
        connection.query('INSERT INTO series SET ?', serie, function (err, result) {
            if (err) throw err;
        });
    },
    atualiza: function (serie, idSerie) {
        connection.query('UPDATE series SET ? WHERE id = ?', [serie, idSerie], function (err, result) {
            if (err) throw err;
        });
    },
    deleta: function (idSerie) {
        connection.query('DELETE FROM series WHERE id = ?', idSerie, function (err, result) {
            if (err) throw err;
        });
    }

}
module.exports = serieDAO;