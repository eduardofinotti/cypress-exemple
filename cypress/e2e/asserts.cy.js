/// <reference types="cypress" />

describe('Asserts', () => {

    it('Verificar se um elemento está presente', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-user')
            .click()

        cy.get('#user')
            .should('be.visible')

        cy.get('.account_form > h3')
            .should('have.text', 'Login')
            .should('contains', 'Login')

    })

})