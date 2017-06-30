'use strict'
const express = require('express'),
	router = express.Router(),
	app = require('../app'),
	listaSeries = [];

router.get('/series', function (req, res) {
	let filtroNome = req.query.nome || false;
	let filtroCategoria = req.query.categoria || false;
	let novalista = [];

	novalista = listaSeries.filter(function (novalista) {
		return novalista.nome == filtroNome || novalista.categoria == filtroCategoria;
	});

	if (filtroNome == false && filtroCategoria == false) {
		res.send(listaSeries);
	} else {
		res.send(novalista);
	}
});

router.get('/series/:id', function (req, res) {
	let numero = 0; i
	let tem = false;
	numero = req.params.id;
	for (let linha in listaSeries) {
		if (listaSeries[linha].id == numero) {
			res.send(listaSeries[linha]);
			tem = true;
		}
	}
	if (tem == false) {
		res.status(404).send({ error: 'Id não encontrado' });
	}
});


router.post('/series', function (req, res) {
	let serie = req.body;
	let tamanho = listaSeries.length;

	if (listaSeries.length == 0) {
		serie.id = tamanho + 1;
		listaSeries.push(serie);
	} else {
		serie.id = listaSeries[tamanho - 1].id + 1
		listaSeries.push(serie);
	}
	res.send(listaSeries);
});

module.exports = router;