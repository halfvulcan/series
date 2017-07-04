'use strict'
const express = require('express'),
	router = express.Router(),
	app = require('../app'),
	fs = require("fs"),
	arquivo = 'lista.json';

let listaSeries = fs.readFileSync(arquivo);
listaSeries = JSON.parse(listaSeries);

router.get('/series', function (req, res) {
	let serieFiltrada = [];
	let filtroNome = req.query.nome || false;
	let filtroCategoria = req.query.categoria || false;

	serieFiltrada = listaSeries.filter(function (serieFiltrada) {
		if (filtroNome && filtroCategoria)
			return filtroNome == serieFiltrada.nome && filtroCategoria == serieFiltrada.categoria;
		else
			return filtroNome == serieFiltrada.nome || filtroCategoria == serieFiltrada.categoria;
	});

	if (filtroNome || filtroCategoria) res.send(serieFiltrada);
	else res.send(listaSeries);
});

router.get('/series/:id', function (req, res) {
	let serieFiltrada = [];
	let idSerie = req.params.id;

	serieFiltrada = listaSeries.filter(function (serieFiltrada) {
		return serieFiltrada.id == idSerie;
	});
	if (serieFiltrada.length > 0) res.send(serieFiltrada);
	else res.status(404).send({ error: 'Id não encontrado' });

});

router.post('/series', function (req, res) {
	let serie = req.body;

	if (listaSeries.length > 0)
		serie.id = listaSeries[listaSeries.length - 1].id + 1
	else serie.id = 1;

	listaSeries.push(serie);
	res.send(serie);
	let novaSerie = JSON.stringify(listaSeries);

	fs.writeFile(arquivo, novaSerie, function (err) {
		if (err) return console.error(err);
	});
});






module.exports = router;