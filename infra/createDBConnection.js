'use strict'
const mysql = require('mysql');

let createDBConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'series',
    database: 'series_nodejs'
});

createDBConnection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = createDBConnection;