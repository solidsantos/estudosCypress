/// <reference types="cypress" />

const url = 'https://wcaquino.me/cypress/componentes.html';

describe('Work with basic elements', () => {
    /*before(() => {
        cy.visit(url);
    });*/
    beforeEach(() => {
        cy.visit(url);
    });
    it('Text', () => {
        cy.get('body').should('contain', 'Cuidado');
        cy.get('span').should('contain', 'Cuidado');
        cy.get('.facilAchar').should('contain', 'Cuidado');
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...');
    });
    it('Links', () => {
        cy.get('[href="#"]').click();
        cy.get('#resultado').should('have.text', 'Voltou!');

        cy.reload();
        cy.get('#resultado').should('have.not.text', 'Voltou!');
        cy.contains('Voltar').click();
        cy.get('#resultado').should('have.text', 'Voltou!')
    });
    it.only('TextFields', () => {
        cy.get('#formNome').type('Cypress Test');
        cy.get('#formNome').should('have.value', 'Cypress Test');

        cy.get('#elementosForm\\:sugestoes')
                .type('textarea')
                .should('have.value', 'textarea');
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input').type('???');
        cy.get('[data-cy=dataSobrenome]').type('Teste12345{backspace}{backspace}');

        cy.get('#elementosForm\\:sugestoes')
                .clear()
                .type('Erro{selectall}acerto', {delay:100})
                .should('have.value', 'acerto');
    });
});