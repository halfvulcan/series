var express = require('express');
var app = express();

var lista = [
	{"id": 1,"nome": "Game of Thrones"},
	{"id": 4,"nome": "Leftovers"},
	{"id": 3,"nome": "Silicon Valley"}
].sort().reverse();

app.get('/series', function(req, res) {
res.send(lista);
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
		res.status(404).send('ERROO');
	}

})
app.listen(3000);
