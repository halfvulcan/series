# Seriados API

Esta é uma API que realiza o cadastro busca, atualização e exclusão de seriados. 

> Foi desenvolvida em nodejs e com alguns outros frameworks:

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

 
>Para realizar a consulta, atualização, inclusão e exclusão de uma série você deve seguir os seguintes passos.

Consultar todas as series.

>Método : GET.

>URL: /series

Consultar uma série por ID.

>Método : GET

>URL: /series/:id

Consultar uma série por nome.

>Método : GET

>URL: /series?[nome]

Consultar uma série por categoria.

>Método : GET

>URL: /series?[categoria]

Consultar uma série por nome e categoria.

>Método : GET

>URL: /series?[nome]&[categoria]

Atualizar os dados de uma série por ID.
URL
>Método : PUT

>URL: /series/:id

>body : { nome: 'The handmaid's tale', categoria : 'Drama'  }

Incluir uma série

>Método : POST

>URL: /series

>body : { nome: 'The handmaid's tale', categoria : 'Ficção distópica'}

Excluir uma serie por ID.
>Método : DELETE

>URL: /series/:id