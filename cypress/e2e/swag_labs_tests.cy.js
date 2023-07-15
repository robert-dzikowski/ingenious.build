const PRICE_LOW_TO_HIGH = 'lohi'
const PRICE_HIGH_TO_LOW = 'hilo'

describe('Swag Labs Tests.', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('.login_logo').should('have.text', 'Swag Labs')
    cy.get("#user-name").type('standard_user')
    cy.get("#password").type('secret_sauce')
    cy.get("#login-button").click()
    //debugger; // For it to work press F12 in browser

    cy.url().should('contain', 'www.saucedemo.com/inventory.html')
    cy.get('.title').should('be.visible')
    cy.get('.title').should('have.text', 'Products')
  })

  it('Sort by price low to high should work correctly', () => {
    cy.get('[data-test=product_sort_container]').select(PRICE_LOW_TO_HIGH)

    let prices = [];
    cy.get('.inventory_item_price').each(($el) => {
      prices.push(parseFloat($el.text().replace('$', '')));
    }).then(() => {
      for (let i = 0; i < prices.length - 1; i++) {
        expect(prices[i]).to.be.at.most(prices[i + 1]);
      }
    });
  }) // test

  it('Sort by price high to low should work correctly', () => {
    cy.get('[data-test=product_sort_container]').select(PRICE_HIGH_TO_LOW)

    let prices = [];
    cy.get('.inventory_item_price').each(($el) => {
      prices.push(parseFloat($el.text().replace('$', '')));
    }).then(() => {
      for (let i = 0; i < prices.length - 1; i++) {
        expect(prices[i]).to.be.at.least(prices[i + 1]);
      }
    });
  }) // test

})