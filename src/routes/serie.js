'use strict'
const express = require('express'),
	router = express.Router(),
	app = require('../app'),
	listaSeries = [];

router.get('/series', function (req, res) {
	let filtroNome = req.query.nome || false;
	let filtroCategoria = req.query.categoria || false;
	let serieFiltrada = [];

	if (filtroNome || filtroCategoria) {
		serieFiltrada = listaSeries.filter(function (serieFiltrada) {
			return serieFiltrada.nome == filtroNome || serieFiltrada.categoria == filtroCategoria;
		});
		res.send(serieFiltrada);
	}
	else res.send(listaSeries);

});

router.get('/series/:id', function (req, res) {
	let serieFiltrada = [];
	let idSerie = req.params.id;

	serieFiltrada = listaSeries.filter(function (serieFiltrada) {
		return serieFiltrada.id == idSerie;
	});

	if (serieFiltrada.length > 0)
		res.send(serieFiltrada);
	else
		res.status(404).send({ error: 'Id não encontrado' });
});


router.post('/series', function (req, res) {
	let serie = req.body;

	if (listaSeries.length > 0)
		serie.id = listaSeries[listaSeries.length - 1].id + 1
	else
		serie.id = 1;

	listaSeries.push(serie);
	res.send(listaSeries);
});

module.exports = router;