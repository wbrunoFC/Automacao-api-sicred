/// <reference types="Cypress" />
import * as GETSimulacoes from '../../support/requests/GETSimulacoes';
import * as POSTSimulacoes from '../../support/requests/POSTSimulacoes';
import * as DELETEsimulacoes from '../../support/requests/DELETESimulacoesID';

describe('DEELTE Simulações ID', () => {
    it('Deve Remover uma simulação existente através do CPF', () => {
        GETSimulacoes.lisarSimulacoes().should(resGetSimulacoes => {
            cy.log(resGetSimulacoes.body[0].cpf);
            cy.log(resGetSimulacoes.body[0].id);
            DELETEsimulacoes.deletarSimulacao().should(resDeleteSimulacoes => {
                expect(resDeleteSimulacoes.status).to.eq(200);
                cy.log('ERRO no codigo fonte, não existe validação para retorno de status 404')
            })
        })
    });
});