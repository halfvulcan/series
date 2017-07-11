'use strict'
const connection = require('./createDBConnection');

const serieDAO = {
    listagem: function (callback) {
        connection.query("SELECT * FROM series", function (err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                return 'Error while performing Query.';
        });
    },
    insere: function (serie) {
        connection.query('INSERT INTO series SET ?', serie, function (err, result) {
            if (err) console.log(err);
        });
    },
    atualiza: function (serie, idSerie) {
        connection.query('UPDATE series SET ? WHERE id = ?', [serie, idSerie], function (err, result) {
            if (err) console.log(err);

        });
    },
    deleta: function (idSerie) {
        connection.query('DELETE FROM series WHERE id = ?', idSerie, function (err, result) {
            if (err) console.log(err);
        });
    }

}
module.exports = serieDAO;