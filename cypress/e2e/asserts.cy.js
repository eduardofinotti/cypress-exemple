/// <reference types="cypress" />

describe('Asserts', () => {

    it('Verificar se um elemento está presente', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-user')
            .click()
    })

})