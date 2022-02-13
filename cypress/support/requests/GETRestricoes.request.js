/// <reference types="Cypress" />
const cpfRestrito = require('../../fixtures/payloads/cpf.json')

function listarCPFRestricoes() {
    return cy.request({
        method: 'GET',
        url: `api/v1/restricoes/${cpfRestrito.CPFsRestritos[0]}`,
        failOnStatusCode: false
    }).as('listarCPFRestricoes');
}

function listarCPFSemRestricao() {
    return cy.request({
        method: 'GET',
        url: `api/v1/restricoes/${cpfRestrito.CPFsValidos[0]}`,
        failOnStatusCode: false
    }).as('listarCPFSemRestricoes');
}

export {
    listarCPFRestricoes,
    listarCPFSemRestricao
};