// pegando as configuracoes do express
const app = require('../config/config')();
// modulo referente as rotas das series
const rotas = require('./routes/serie')(app);

app.listen(3000);
