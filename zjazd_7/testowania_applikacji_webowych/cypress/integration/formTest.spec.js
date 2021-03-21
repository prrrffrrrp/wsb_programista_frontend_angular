/// <reference types="Cypress" />
Cypress.config().waitForAnimations = true;

import { parametersAccountManager } from '../fixtures/parameters'

const registerURL = `${parametersAccountManager.formURL}/register.html`
const loginURL = `${parametersAccountManager.formURL}/index.html`
const loggedURL = `${parametersAccountManager.formURL}/login.html`

const confirmURL = (url) => {
    cy.location().should(($loc) => {
        expect($loc.href).to.eq(url);
    })
}

describe("Form test for selected app", () => {
    it("Open app url", () => {
        cy.visit(parametersAccountManager.formURL);
    })

    it("Verify Logging page form elements", () => {
        cy.verifyForm(
            parametersAccountManager.role,
            parametersAccountManager.subtitle,
            parametersAccountManager.buttonText,
            parametersAccountManager.linkText
        )
    })

    it("Form - register", () => {
        cy.get('a[href="register.html"]').click();
        confirmURL(registerURL);
        cy.registerToApp(parametersAccountManager.testedLogin, parametersAccountManager.testedPassword);
        cy.get('button').should('have.text', parametersAccountManager.setUpAccount).click();
        confirmURL(loginURL);
    })

    it('Form login user', () => {
        cy.get('input[name="login"]').type(parametersAccountManager.testedLogin);
        cy.get('input[name="password"]').type(parametersAccountManager.testedPassword);
        cy.get('button').should('have.text', parametersAccountManager.buttonText).click();
        // cy.wait(3000);

        cy.window().then($win => {
            expect($win.localStorage.getItem('logged')).to.eql("1");
        })

        confirmURL(loggedURL);

    })

    it("Form - logout user", () => {
        cy.get("#welcomemsg").should("have.text", "Witaj " + parametersAccountManager.testedLogin + "!");
        cy.get('button').should('have.text', parametersAccountManager.logoutButtonText).click();
        confirmURL(loginURL);
      });
})
