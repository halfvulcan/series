'use strict'
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      serie = require('./routes/serie');

      
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(serie);
      
module.exports = app;
