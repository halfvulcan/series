'use strict'
const express = require('../src/app'),
      request = require('supertest')(express);

describe('Series', function () {
    it('Series json', function (done) {
        request.get('/series')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('#Cadastro de uma serie invalida', function (done) {
        request.post('/series')
            .send({ nome: "", categoria: "FODASSE" })
            .expect(400, done);
    });
        it('#Cadastro de uma serie valida', function (done) {
        request.post('/series')
            .send({ nome: "VAI CARALHOS", categoria: "FODASSE" })
            .expect(200, done);
    });
});