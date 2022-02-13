/// <reference types="Cypress" />
import * as PUTSimulacoes from '../../support/requests/PUTSimulacoesCPF';
import * as GETSimulacoes from '../../support/requests/GETSimulacoes';
import * as POSTSimulacoes from '../../support/requests/POSTSimulacoes';

describe('PUT Simulações CPF', () => {
    it('Deve atualizar a simulação pelo CPF', () => {
        GETSimulacoes.lisarSimulacoes().then(resGetSimulacoes => {
            expect(resGetSimulacoes.body).to.be.not.null;
            cy.log(resGetSimulacoes.body[0].cpf);
            cy.log(resGetSimulacoes.body[1].cpf);
            POSTSimulacoes.simulacaoCPFDuplicado().should(() => {
                PUTSimulacoes.atualizarSimulacaoPeloCPF().should(resPutSimulacoes => {
                    expect(resPutSimulacoes.status).to.eq(200);
                    expect(resPutSimulacoes.body.nome).to.eq('Fulano de Tal');
                })
            })
        })
    });

    it('Deve apresentar simulação não encontrada', () => {
        PUTSimulacoes.simulacaoNaoEncontrada().should(resPutSimulacoes => {
            expect(resPutSimulacoes.status).to.eq(404);
        })
    });
});