'use strict'
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      serie = require('./routes/serie'),
      expressValidator = require('express-validator');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(serie);

module.exports = app;