describe('Swag Labs Tests.', () => {
    it('I should be able to login as locked_out_user', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('.login_logo').should('have.text', 'Swag Labs')
        cy.get("#user-name").type('locked_out_user')
        cy.get("#password").type('secret_sauce')
        cy.get("#login-button").click()
        // debugger;
        cy.url().should('contain', 'www.saucedemo.com/inventory.html')
        cy.get('.title').should('be.visible')
        cy.get('.title').should('have.text', 'Products')
    })
})