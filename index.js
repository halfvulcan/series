'use strict';
const app = require('./src/app'),
      config = require('./config/config');
      
      app.listen(config.server.port);
      console.log("Servidor rodando na porta",config.server.port);
