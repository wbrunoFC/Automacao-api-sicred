/// <reference types="Cypress" />
const cpfRestrito = require('../../fixtures/payloads/cpf.json')


function listarSimulacaoPeloCPF() {
    return cy.request({
        method: 'GET',
        url: `api/v1/simulacoes/${cpfRestrito.CPFsValidos[0]}`,
        failOnStatusCode: false
    }).as('Listar Simulação pelo CPF');
}

function simulacaoNaoEncontrada() {
    return cy.request({
        method: 'GET',
        url: `api/v1/simulacoes/${cpfRestrito.CPFsRestritos[0]}`,
        failOnStatusCode: false
    }).as('Simulação não encontrada pelo CPF');
}

export { 
    listarSimulacaoPeloCPF,
    simulacaoNaoEncontrada
 };
