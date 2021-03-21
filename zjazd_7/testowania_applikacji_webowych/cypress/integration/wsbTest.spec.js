/// <reference types="Cypress" />
Cypress.config().waitForAnimations = true;

describe("Duck Duck Go test", () => {
    it('should open WSB page', () => {
        cy.visit("www.wsb.pl/wroclaw");
    })

    it('should open training tab', () => {
        cy.get('.links > .expandable > :nth-child(1) > .title').contains('Studia')
    })

    it('open search and find', () => {
        cy.get('.search-icon > a').click({force:true});
        cy.get('#header-search > .grid-wrapper > .search-input > .search').type("Angular{enter}")
    })

    it('Check for phrase', () => {
        cy.get('.study-directions').should('contain', 'Programista Front-end z Angular')
    })
})
