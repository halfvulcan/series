'use strict'
const express = require('express'),
	router = express.Router(),
	persisteArquivo = require('../persisteArquivo'),
	validacao = require('./validator');

let serieFiltrada = [],
	listaSeries = persisteArquivo.leArquivoOuCriaArquivo();


router.get('/series', function (req, res) {
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
	let idSerie = req.params.id;

	serieFiltrada = listaSeries.filter(function (serieFiltrada) {
		return serieFiltrada.id == idSerie;
	});
	if (serieFiltrada.length > 0) res.send(serieFiltrada);
	else res.status(404).send({ error: 'Id não encontrado' });

});

router.post('/series', function (req, res) {
	let serie = req.body;

	if (validacao(req, res) == false) return;

	if (listaSeries.length > 0)
		serie.id = listaSeries[listaSeries.length - 1].id + 1
	else serie.id = 1;

	listaSeries.push(serie);
	let novaSerie = JSON.stringify(listaSeries);
	persisteArquivo.insereArquivo(novaSerie);
	res.send(serie);

});

router.delete('/series/:id', function (req, res) {
	let serie = req.body,
		idSerie = req.params.id,
		index = listaSeries.findIndex((serieFiltrada) => serieFiltrada.id == idSerie);

	if (index > -1) listaSeries.splice(index, 1);

	let novaSerie = JSON.stringify(listaSeries);
	persisteArquivo.insereArquivo(novaSerie);
	res.send(serieFiltrada);
});

router.put('/series/:id', function (req, res) {
	let serie = req.body,
		idSerie = req.params.id,
		index = listaSeries.findIndex((serieFiltrada) => serieFiltrada.id == idSerie);

	if (validacao(req, res) == false) return;

	if (index > -1) {
		serie.id = listaSeries[index].id;
		listaSeries.splice(index, 1, serie);
	}
	let novaSerie = JSON.stringify(listaSeries);
	persisteArquivo.insereArquivo(novaSerie);
	res.send(serieFiltrada);
});

module.exports = router;