'use strict'
const serie = require('./serie');

const validacao = function (req, res) {
    req.assert('nome', 'Nome é obrigatório').notEmpty();
    req.assert('categoria', 'Categoria é obrigatória').notEmpty();

    let errors = req.validationErrors();
    if (errors) {
        res.status(400).json({ erro: errors });
        return false;
    }
    return true;
}

module.exports = validacao;