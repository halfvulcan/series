'use strict'
const express = require('express'),
	router = express.Router(),
	app = require('../app'),
	lista = [];

router.get('/series', function (req, res) {
	let nome = req.query.nome;
	let categoria = req.query.categoria;
	let novalista = [];

	if (nome == null && categoria == null) {
		res.send(lista);
	} else {
		if (typeof nome != "undefined") {
			for (let linha in lista) {
				if (lista[linha].nome == nome) {
					novalista.push(lista[linha]);
				}
			}
		} else
			if (typeof categoria != "undefined") {
				for (let linha in lista) {
					if (lista[linha].categoria == categoria) {
						novalista.push(lista[linha]);
					}
				}
			} else
				if (typeof categoria != "undefined" && typeof categoria != "undefined") {
					for (let linha in lista) {
						if (lista[linha].nome == nome & lista[linha].categoria == categoria) {
							novalista.push(lista[linha]);
						}
					}
				}
		res.send(novalista);
	}
});

//realizando a busca pelo id pelo caminho Ex:/series/1
router.get('/series/:id', function (req, res) {
	let numero = 0;
	let tem = false;
	numero = req.params.id;
	for (let linha in lista) {
		if (lista[linha].id == numero) {
			res.send(lista[linha]);
			tem = true;
		}
	}
	if (tem == false) {
		res.status(404).send({ error: 'Id não encontrado' });
	}
});


//realizando a insersao de uma serie
router.post('/series', function (req, res) {
	let serie = req.body;
	let tamanho = lista.length;

	if (lista.length == 0) {
		serie.id = tamanho + 1;
		lista.push(serie);
	} else {
		serie.id = lista[tamanho - 1].id + 1
		lista.push(serie);
	}
	res.send(lista);
});

module.exports = router;
