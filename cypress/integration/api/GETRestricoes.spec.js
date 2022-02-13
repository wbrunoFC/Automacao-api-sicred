/// <reference types="Cypress" />
import * as GETRestricoes from '../../support/requests/GETRestricoes.request';

describe('GET Restrições CPF', () => {
    it('Listar CPF com restrição', () => {
        GETRestricoes.listarCPFRestricoes().should(res => {
            expect(res.status).to.eq(200);
            expect(res.body.mensagem).to.eq(`O CPF 97093236014 tem problema`);
        })
    });

    it('Listar CPF sem restrição', () => {
        GETRestricoes.listarCPFSemRestricao().should(res => {
            expect(res.status).to.eq(204);
            expect(res.body.mensagem).to.eq(undefined);
        })
    })
});