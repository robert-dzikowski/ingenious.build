// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('login', (user) => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('.login_logo').should('have.text', 'Swag Labs')
    cy.get("#user-name").type(user)
    cy.get("#password").type('secret_sauce')
    cy.get("#login-button").click()

    // Check if we are logged in
    cy.url().should('contain', 'www.saucedemo.com/inventory.html')
    cy.get('.title').should('be.visible')
    cy.get('.title').should('have.text', 'Products')
});