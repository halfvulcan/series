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
	let novalista = [];
	let idSerie = req.params.id;
	
	novalista = listaSeries.filter(function (novalista) {
		return novalista.id == idSerie;
	});

	if (novalista.length > 0)
		res.send(novalista);
	else
		res.status(404).send({ error: 'Id não encontrado' });	
});


router.post('/series', function (req, res) {
	let novaSerie = req.body;
	novalista = listaSeries.filter(function (novalista) {
		return novalista.id == idSerie;
	});


	if (listaSeries.length == 0) {
		novaSerie.id = tamanho + 1;
		listaSeries.push(novaSerie);
	} else {
		novaSerie.id = listaSeries[tamanho - 1].id + 1
		listaSeries.push(novaSerie);
	}
	res.send(listaSeries);
});

module.exports = router;