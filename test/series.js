'use strict'
const express = require('../src/app'),
    request = require('supertest')(express);

describe('Series', function () {
    it('Lista a serie em json', function (done) {
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
    it('Lista a serie por id', function (done) {
        request.get('/series/1')
            .expect(200, done);
    });
    it('#Autalizando uma serie', function (done) {
        request.put('/series/1')
            .send({ nome: "ATUALIZADA", categoria: "FODASSE" })
            .expect(200, done);
    });
    it('#Autalizando uma serie incorretamente', function (done) {
        request.put('/series/1')
            .send({ nome: "ATUALIZADA", categoria: "" })
            .expect(400, done);
    });
    it('#Deletando uma serie', function (done) {
        request.delete('/series/1')
            .expect(200, done);
    });
});