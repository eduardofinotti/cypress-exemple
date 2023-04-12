/// <reference types="cypress" />

const btnAccessLogin = '.fa.fa-user'

export default {
    acessURL() {
        cy.visit('/')
    },
    enterLoginPage() {
        cy.get(btnAccessLogin)
            .click()
    }
}
