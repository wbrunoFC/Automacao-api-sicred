/// <reference types="Cypress" />
const cpf = require('../../fixtures/payloads/cpf.json')
let faker = require('faker-br');

function atualizarSimulacaoPeloCPF() {
    return cy.request({
        method: 'PUT',
        url: `api/v1/simulacoes/${cpf.CPFsValidos[1]}`,
        failOnStatusCode: false,
        body: {
            "nome": "Fulano de Tal",
            "cpf": `${cpf.CPFsValidos[1]}${faker.random.number({min: 1, max: 400})}`,
            "email": "email@email.com",
            "valor": 1200,
            "parcelas": 3,
            "seguro": true
        }
    }).as('Atualizar Simulação pelo CPF');
}

function simulacaoNaoEncontrada() {
    return cy.request({
        method: 'PUT',
        url: 'api/v1/simulacoes/1',
        failOnStatusCode: false,
        body: {
            "nome": "Fulano de Tal",
            "cpf": `${cpf.CPFsValidos[1]}${faker.random.number({min: 1, max: 400})}`,
            "email": "email@email.com",
            "valor": 1200,
            "parcelas": 3,
            "seguro": true
        }
    }).as('Simulação não encontrada');
}

function cpfJaExistente() {
    return cy.request({
        method: 'PUT',
        url: `api/v1/simulacoes/${cpf.CPFsRestritos[0]}`,
        failOnStatusCode: false,
        body: {
            "nome": "Fulano de Tal",
            "cpf": `${cpf.CPFsValidos[1]}${faker.random.number({min: 1, max: 400})}`,
            "email": "email@email.com",
            "valor": 1200,
            "parcelas": 3,
            "seguro": true
        }
    }).as('CPF ja existente');
}

export {
    atualizarSimulacaoPeloCPF,
    simulacaoNaoEncontrada,
    cpfJaExistente
}
