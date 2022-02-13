/// <reference types="Cypress" />
import * as GETSimulacoes from '../../support/requests/GETSimulacoes';

describe('GET Simulações', () => {
    it('Deve retornar todas as simulações existentes ', () => {
        GETSimulacoes.lisarSimulacoes().should(res => {
            expect(res.status).to.eq(200);
            expect(res.body).to.be.not.empty;
        })
    });
});