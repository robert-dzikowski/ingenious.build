const PRICE_LOW_TO_HIGH = 'lohi'
const PRICE_HIGH_TO_LOW = 'hilo'
const NAME_A_TO_Z = 'az'
const NAME_Z_TO_A = 'za'


describe('Sorting Tests.', () => {
    beforeEach(() => {
        cy.login('standard_user')
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
    })// test

    it('Sort by price high to low should work correctly', () => {
        cy.get('[data-test=product_sort_container]').select(PRICE_HIGH_TO_LOW)

        let prices = [];
        cy.get('.inventory_item_price').each(($el) => {
            prices.push(parseFloat($el.text().replace('$', '')));
        }).then(() => {
            for (let i = 0; i < prices.length - 1; i++) {
                //console.log(typeof (prices[i])) // number
                expect(prices[i]).to.be.at.least(prices[i + 1]);
            }
        });
    })// test

    it('Sort by product name Z to A should work correctly', () => {
        cy.get('[data-test=product_sort_container]').select(NAME_Z_TO_A)

        let products = [];
        cy.get('.inventory_item_name').each(($el) => {
            products.push($el.text());
        }).then(() => {
            for (let i = 0; i < products.length - 1; i++) {
                // console.log(typeof (products[i])) // string
                // expect(products[i]).to.be.greaterThan(products[i + 1]);
                // expect(products[i] >= products[i + 1]);
                if (products[i].localeCompare(products[i + 1]) == -1) {
                    throw new Error("Products aren't sorted.");
                }
            }
        });
    })// test

    it('Sort by product name A to Z should work correctly', () => {
        // I am doing this select beacuse NAME_A_TO_Z is default sorting
        cy.get('[data-test=product_sort_container]').select(PRICE_HIGH_TO_LOW)

        cy.get('[data-test=product_sort_container]').select(NAME_A_TO_Z)

        let products = [];
        cy.get('.inventory_item_name').each(($el) => {
            products.push($el.text());
        }).then(() => {
            for (let i = 0; i < products.length - 1; i++) {
                if (products[i].localeCompare(products[i + 1]) == 1) {
                    throw new Error("Products aren't sorted.");
                }
            }
        });
    })// test

})