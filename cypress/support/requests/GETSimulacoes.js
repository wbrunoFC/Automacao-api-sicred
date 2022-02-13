/// <reference types="Cypress" />

function lisarSimulacoes() {
    return cy.request({
        method: 'GET',
        url: 'api/v1/simulacoes',
        failOnStatusCode: false
    }).as('listar Simulacoes');
}

export { lisarSimulacoes };
