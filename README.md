Seriados API
===================

>Esta é uma API que realiza o cadastro busca, atualização e exclusão de seriados. 

Foi desenvolvida em nodejs e com alguns outros frameworks:

Nodejs - O Node.js permite que você execute o JavaScript no servidor.
Express -O Express é um framework para aplicativo da web do Node.js.
Mysql -O MySQL é um SGBD, que utiliza a linguagem SQL como interface. 


### Instalação

>Instalação via git clone
$ git clone https://github.com/
$ cd series
$ npm install


### Utilização 

 Para realizar a consulta, atulização, inclusão e exclusão de uma serie voce deve seguir os seguintes passos
.

Para consultar todas as series.
>Método GET.
url: /series

Para consultar uma série por ID.

>Método GET
url: /series/id

Para consultar uma série por nome.

>Método GET
url: /series?nome

Para consultar uma série por categoria.

>Método GET
url: /series?categoria

Para consultar uma série por nome e categoria.

>Método GET
url: /series?nome&categoria

Para atualizar os dados de uma série por ID.

>Método PUT
url: /series/id
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
url: /series/id