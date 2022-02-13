/// <reference types="Cypress" />
import * as GETSimulacoesCPF from '../../support/requests/GETSimulacoesCPF';

describe('GET Simulações CPF', () => {
    it('Deve listar simulaçao pelo CPF', () => {
        GETSimulacoesCPF.listarSimulacaoPeloCPF().should(res => {
            expect(res.status).to.eq(200);
            expect(res.body).to.have.property('cpf');
            expect(res.body.cpf).to.eq('66414919004');
        })
    });

    it('Deve realizar simulação por CPF não encontrado', () => {
        GETSimulacoesCPF.simulacaoNaoEncontrada().should(res => {
            expect(res.status).to.eq(404);
            expect(res.body).to.have.property('mensagem');
            expect(res.body.mensagem).to.eq('CPF 97093236014 não encontrado');
        })
    });
});