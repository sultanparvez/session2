//describe -- Testsuite
//it -- Testcases
/// <reference types="cypress"/>
describe('Testsuite01',()=>{
    it("Testcase01",()=>{
        cy.visit("/")
        // cy.viewport("iphone-6")
        // cy.pause()
        cy.get('.search-keyword').type('ca')
        //timeout
        cy.wait(1000)
        cy.get('.product:visible').should('have.length',4)
        //static selection
        cy.get('.products').as("PL")
        cy.get('@PL').find(".product").eq(1).contains("ADD TO CART").click()
        //Dynamic Selection
        cy.get('@PL').find(".product").each(($el,index,$list)=>{
           const vegName= $el.find(".product-name").text()
           if(vegName.includes("Cashews")){
            cy.wrap($el).find("button").click()
           }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        cy.get('select').select("Bangladesh").should("have.value","Bangladesh")
        cy.get('.chkAgree').click()
        cy.get('button').click()
        cy.screenshot("Process Completed")
        // cy.pause()
        // cy.get(':nth-child(2) > .product-action > button').click()
        // cy.get(':nth-child(3) > .product-action > button').click()
        // cy.get('.cart-icon > img').click()
        // cy.contains('PROCEED TO CHECKOUT').click()
        // cy.get(':nth-child(14)').click()
        // cy.get('button').click()
    })
})