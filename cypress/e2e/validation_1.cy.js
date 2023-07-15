const FIRST_ITEM = "Sauce Labs Bike Light"
const SECOND_ITEM = "Sauce Labs Backpack"

describe('Validation 1 Test', () => {
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

    it('', () => {
        // Find an item by name, then add it to the cart
        let regex = new RegExp(FIRST_ITEM, "i")
        cy.findByText(regex).parents().eq(2).find('button').click()

        // Find a second item by name, and add it to the cart as well
        regex = new RegExp(SECOND_ITEM, "i")
        cy.findByText(regex).parents().eq(2).find('button').click()

        // - Go to the cart
        cy.get('.shopping_cart_link').click()
        cy.url().should('contain', 'www.saucedemo.com/cart.html')
        cy.get('.title').should('have.text', 'Your Cart')

        // There should be 2 prooducts displayed on the page
        cy.get('.inventory_item_name').should('have.length', 2)

        // Find an item by name, then remove it from the cart
        regex = new RegExp(SECOND_ITEM, "i")
        cy.findByText(regex).parents().eq(1).find('button').click()

        // Validate in the Checkout Overview that:
        //  - It only contains the items that you want to purchase
        cy.get('.inventory_item_name').should('have.length', 1)
        regex = new RegExp(FIRST_ITEM, "i")
        cy.findByText(regex)

        //  - The Item Total is right
        cy.get('.cart_quantity').should('have.text', '1')

        // Finish the purchase
        cy.get('[data-test="checkout"]').click()
        cy.url().should('contain', 'www.saucedemo.com/checkout-step-one.html')
        cy.get('.title').should('have.text', 'Checkout: Your Information')

        cy.get('[data-test="firstName"]').type('Robert')
        cy.get('[data-test="lastName"]').type('Dzikowski')
        cy.get('[data-test="postalCode"]').type('00123')
        cy.get('[data-test="continue"]').click()

        // Finish your order
        cy.url().should('contain', 'www.saucedemo.com/checkout-step-two.html')
        cy.get('.title').should('have.text', 'Checkout: Overview')
        cy.get('.cart_quantity').should('have.text', '1')
        regex = new RegExp(FIRST_ITEM, "i")
        cy.findByText(regex)
        cy.get('[data-test="finish"]').click()

        // Validate that the website confirms the order
        cy.url().should('contain', 'www.saucedemo.com/checkout-complete.html')
        cy.get('.complete-header').should('have.text', 'Thank you for your order!')
    })
})
