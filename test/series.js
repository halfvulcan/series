'use strict'
const express = require('../src/app'),
    request = require('supertest')(express);

describe('#Testando API Seriados', function () {

    it('#Cadastro de uma serie INVALIDA', function (done) {
        request.post('/series')
            .send({ nome: "", categoria: "INVALIDA" })
            .expect(400, done);
    });
    it('#Cadastro de uma serie valida', function (done) {
        request.post('/series')
            .send({ nome: "Leftovers", categoria: "Blow Mind" })
            .expect(200, done);
    });
    it('Lista a serie em json', function (done) {
        request.get('/series')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('Lista a serie por id', function (done) {
        request.get('/series/1')
            .expect(200, done);
    });
    it('Lista a serie por nome', function (done) {
        request.get('/series?Leftovers')
            .expect(200, done);
    });
    it('Lista a serie por categoria', function (done) {
        request.get('/series?Blow Mind')
            .expect(200, done);
    });
    it('Lista a serie por categoria e nome', function (done) {
        request.get('/series?Blow Mind&Leftovers')
            .expect(200, done);
    });
    it('#Atualizando uma serie que nao existe', function (done) {
        request.put('/series/10')
            .send({ nome: "Leftovers", categoria: "Blow Mind" })
            .expect(404, done);
    });
    it('#Autalizando uma serie', function (done) {
        request.put('/series/1')
            .send({ nome: "ATUALIZADA", categoria: "FODASSE" })
            .expect(200, done);
    });
    it('#Autalizando uma serie INCORRETAMENTE', function (done) {
        request.put('/series/1')
            .send({ nome: "ATUALIZADA", categoria: "" })
            .expect(400, done);
    });
    it('#Deletando uma serie que nao existe', function (done) {
        request.delete('/series/10')
            .expect(404, done);
    });
    it('#Deletando uma serie', function (done) {
        request.delete('/series/1')
            .expect(200, done);
    });
});