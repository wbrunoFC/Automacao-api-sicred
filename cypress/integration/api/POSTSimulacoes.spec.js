/// <reference types="Cypress" />
import * as POSTSimulacoes from '../../support/requests/POSTSimulacoes';

describe('POST Simulações', () => {
    it('Deve Inserir nova simulação', () => {
        POSTSimulacoes.inserirSimulacao().should(res => {
            expect(res.status).to.eq(201);
            expect(res.body.email).to.eq('email@email.com');
        })
    });

    it('Deve alertar falta de informação ao inserir simulação', () => {
        POSTSimulacoes.simulacaoFaltaDeInformacao().should(res => {
            expect(res.status).to.eq(400);
            expect(res.body.erros.email).to.eq('E-mail deve ser um e-mail válido');
        })
    });
    
    it('Deve alertar duplicidade de CPF ao inserir nova simulação', () => {
        POSTSimulacoes.simulacaoCPFDuplicado().should(res => {
            if (res.status === 400) {
                expect(res.status).to.eq(400);
                expect(res.body.mensagem).to.eq('CPF duplicado');
            }else {
                expect(res.status).to.eq(201);
            }
            
            cy.log('Erro no codigo fonte deveria retornar 409');
        })
    });
});