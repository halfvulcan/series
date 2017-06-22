var express = require('express');
var app = express();

var lista = [
	{"id": 1,"nome": "Game of Thrones"},
	{"id": 4,"nome": "Leftovers"},
	{"id": 3,"nome": "Silicon Valley"},
	{"id": 5,"nome": "Silicon Valley"}
].sort().reverse();

app.get('/series', function(req, res) {
	var nome =  req.query.nome;
	var novalista = [];

	if (nome == null) {
		res.send(lista);
	}else {
		for (var linha in lista) {
			if(lista[linha].nome == nome)	{
				novalista.push(lista[linha]);
			}
		}
		res.send(novalista);
	}	
});

app.get('/series/:id', function (req, res) {
	var numero = 0;
	var tem = false;
	numero = req.params.id;

	for (var linha in lista) {
	  	if(lista[linha].id == numero)	{
			res.send(lista[linha]);
			tem = true;
			}
	}
	if (tem == false){
		res.status(404).send({ error: 'Id não encontrado' });
	}

})

app.listen(3000);
