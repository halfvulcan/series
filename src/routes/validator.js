'use strict'
const serie = require('./serie');

const validacao = {
    validaBody: function (req, res) {
        req.assert('nome', 'Titulo é obrigatório').notEmpty();
        req.assert('descricao', 'Formato inválido').notEmpty();

        let errors = req.validationErrors();
        if (errors) {
            res.status(400).json({ "msg": "msg de erro" });
            res.end();
            return;
        }
    }
}

module.exports = validacao;