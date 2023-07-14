describe('Swag Labs Tests.', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('.login_logo').should('have.text', 'Swag Labs')
    cy.get("#user-name").type('standard_user')
    cy.get("#password").type('secret_sauce')
    cy.get("#login-button").click()

    cy.url().should('contain', 'www.saucedemo.com/inventory.html')
    cy.get('.title').should('be.visible')
    cy.get('.title').should('have.text', 'Products')
  })

  it('Sort by products should work correctly', () => {
  })
})