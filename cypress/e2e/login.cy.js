
import LoginPage from '../support/pages/login.page'

describe('template spec', () => {
  
  it('passes', () => {

    LoginPage.acessURL()
    LoginPage.enterLoginPage()

    cy.get('#user')
      .should('be.visible')
      .should('exist')
      .type('dudu@dudu.com')
  })
})
