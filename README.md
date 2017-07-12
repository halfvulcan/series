# Seriados API

Esta é uma API que realiza o cadastro busca, atualização e exclusão de seriados. 

>Foi desenvolvida em nodejs e com alguns outros frameworks:

>[Nodejs](nodejs.org) - O Node.js permite que você execute o JavaScript no servidor.

>[Express](expressjs.com) - O Express é um framework para aplicativo da web do Node.js.

>[Mysql](mysql.com)  -O MySQL é um SGBD, que utiliza a linguagem SQL como interface. 


### Instalação

>Instalação via git clone
```bash
$ git clone http://gitlab.metasix.com.br/patricia.santana/series
$ cd series
$ npm install
```

### Testes

>API consta com testes integrados para realizar a validação dos componentes principais com alguns cenários básicos. 

>Para executar basta executar os testes integrados basta executar os seguintes passos:

>```bash
$ cd /series
$ npm test
```
### Utilização 

 Para realizar a consulta, atualização, inclusão e exclusão de uma série você deve seguir os seguintes passos.

Para consultar todas as series.

>Método GET.
url: /series

Para consultar uma série por ID.

>Método GET
url: /series/:id

Para consultar uma série por nome.

>Método GET
url: /series?[nome]

Para consultar uma série por categoria.

>Método GET
url: /series?[categoria]

Para consultar uma série por nome e categoria.

>Método GET
url: /series?[nome]&[categoria]

Para atualizar os dados de uma série por ID.

>Método PUT
url: /series/:id
body : {
	nome: 'The handmaid's tale',
    categoria : 'Drama'
    }

Para incluir uma série

>Método POST
url: /series
body : {
    nome: 'The handmaid's tale',
    categoria : 'Ficção distópica'
}

Para excluir uma serie por ID.
>Método DELETE
url: /series/:id