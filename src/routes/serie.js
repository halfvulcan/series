'use strict'
const express = require('express'),
	router = express.Router(),
	validacao = require('./validator'),
	connection = require('../../infra/createDBConnection'),
	serieDAO = require('../../infra/serieDAO');

let serieFiltrada = [],
	listaSeries = [];


serieDAO.listagem(function atualizalista(listagem) {
	listaSeries = listagem;
});

router.get('/series', function (req, res, callback) {

	let filtroNome = req.query.nome || false;
	let filtroCategoria = req.query.categoria || false;

	serieFiltrada = listaSeries.filter(function (serieFiltrada) {
		if (filtroNome && filtroCategoria)
			return filtrserieFiltradaoNome == serieFiltrada.nome && filtroCategoria == serieFiltrada.categoria;
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

	serieDAO.insere(serie);
	res.send(serie);

	serieDAO.listagem(function atualizalista(listagem) {
		listaSeries = listagem;
	});

});

router.delete('/series/:id', function (req, res) {
	let serie = req.body,
		idSerie = req.params.id;

	serieDAO.deleta(idSerie);
	res.send(serie);

	serieDAO.listagem(function atualizalista(listagem) {
		listaSeries = listagem;
	});
});

router.put('/series/:id', function (req, res) {
	let serie = req.body,
		idSerie = req.params.id;

	if (validacao(req, res) == false) return;

	serieDAO.atualiza(serie,idSerie);
	res.send(serie);

	serieDAO.listagem(function atualizalista(listagem) {
		listaSeries = listagem;
	});
});

module.exports = router;