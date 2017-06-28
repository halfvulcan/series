module.exports = function(app){

	const bodyParser = require('body-parser');

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	var lista = [];

	// realiza a busca  por nome no caminho Ex:/series?nome=Leftovers
	// realiza a busca  pela categoria no caminho Ex:/series?categoria=Blow mind
	// ou os dois parametros  Ex:/series?nome=Leftovers&categoria=Blow mind
	// caso nao passe nenhum parametro ele retorna a lista completa Ex: /series

	app.get('/series', function(req, res) {
		var nome =  req.query.nome;
		var categoria = req.query.categoria;
		var novalista = [];

		if (nome == null && categoria == null) {
			res.send(lista);
		} else {
			if (typeof nome != "undefined"){
				for (var linha in lista) {
					if(lista[linha].nome == nome)	{
						novalista.push(lista[linha]);
					}
				}
			}else
			if (typeof categoria != "undefined"){
				for (var linha in lista) {
					if(lista[linha].categoria == categoria)	{
						novalista.push(lista[linha]);
					}
				}
			} else
			if (typeof categoria != "undefined" && typeof categoria != "undefined"){
				for (var linha in lista) {
					if(lista[linha].nome == nome & lista[linha].categoria == categoria)	{
						novalista.push(lista[linha]);
					}
				}
			}
			res.send(novalista);
		}
	});

	//realizando a busca pelo id pelo caminho Ex:/series/1
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


	//realizando a insersao de uma serie
	app.post('/series', function(req, res){
		var serie = req.body;
		var tamanho = lista.length;\

			if (lista.length == 0){
				id = tamanho + 1;
				lista.push(serie);
			}else{
				serie.id = lista[tamanho - 1]
				lista.push(serie);
			}
		res.send(lista);
	});


}
