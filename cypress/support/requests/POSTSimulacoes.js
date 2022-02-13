/// <reference types="Cypress" />
let faker = require('faker-br');

function inserirSimulacao() {
    return cy.request({
        method: 'POST',
        url: 'api/v1/simulacoes',
        failOnStatusCode: false,
        body: {
            "nome": `${faker.name.firstName()}`,
            "cpf": faker.br.cpf(),
            "email": "email@email.com",
            "valor": 1200,
            "parcelas": faker.random.number({
                min: 1,
                max: 10
            }),
            "seguro": true
        }
    }).as('Inserir nova simulação');
}

function simulacaoFaltaDeInformacao() {
    return cy.request({
        method: 'POST',
        url: 'api/v1/simulacoes',
        failOnStatusCode: false,
        body: {
            "nome": `${faker.name.firstName()}`,
            "cpf": faker.br.cpf(),
            "email": "",
            "valor": faker.random.number({
                min: 1,
                max: 2000
            }),
            "parcelas": faker.random.number({
                min: 1,
                max: 10
            }),
            "seguro": true
        }
    }).as('Inserir com falta de informação');
}

function simulacaoCPFDuplicado() {
    return cy.request({
        method: 'POST',
        url: 'api/v1/simulacoes',
        failOnStatusCode: false,
        body: {
            "nome": "Fulano de Tal",
            "cpf": 17822386034,
            "email": "email@email.com",
            "valor": 1200,
            "parcelas": 3,
            "seguro": true
        }
    }).as('Inserir CPF duplicado');
}

function cadastrarSimulação() {
    return cy.request({
        method: 'POST',
        url: 'api/v1/simulacoes',
        failOnStatusCode: false,
        body: {
            // "id": 11,
            "nome": "Fulano",
            "cpf": 66414919004,
            "email": "fulano@gmail.com",
            "valor": 11000,
            "parcelas": 3,
            "seguro": true
        }
    }).as('Inserir CPF duplicado');
}

export {
    inserirSimulacao,
    simulacaoFaltaDeInformacao,
    simulacaoCPFDuplicado,
    cadastrarSimulação
};