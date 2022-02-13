/// <reference types="Cypress" />

function deletarSimulacao() {
    return cy.request({
        method: 'DELETE',
        url: `api/v1/simulacoes/${11}`,
        failOnStatusCode: false
    }).as('Apagar simulação pelo ID');
}

export {
    deletarSimulacao
}
