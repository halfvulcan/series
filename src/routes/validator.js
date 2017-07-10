'use strict'
const serie = require('./serie'),
    validator = require('./validator');;

const validacao = {
    validaBody: function (req, res) {
        req.assert('nome', 'Titulo é obrigatório').notEmpty();
        req.assert('descricao', 'Formato inválido').notEmpty();

        let errors = req.validationErrors();
        if (errors) {
            res.status(400);
            // res.status(404).send({ errors: 'Id não encontrado' });
            return;
        }
        return;

    }

}

module.exports = validacao;