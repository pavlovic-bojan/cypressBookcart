export class BasePage {

    navigateTo(path: string) {
        cy.visit(path);
    }

    getCurrentUrl() {
        return cy.url();
    }

    waitForLoaderToDisappear(timeout = 10000) {
        cy.get('mat-spinner', { timeout }).should('not.exist');
    }

    isToastVisible() {
        return cy.get('snack-bar-container').should('be.visible');
    }

    typeIntoField(selector: string, value: string) {
        cy.get(selector).clear().type(value);
    }

    clickElement(selector: string) {
        cy.get(selector).click();
    }

    assertElementVisible(selector: string) {
        cy.get(selector).should('be.visible');
    }

    assertTextInElement(selector: string, text: string) {
        cy.get(selector).should('contain.text', text);
    }

    assertUrlContains(text: string) {
        cy.url().should('include', text);
    }

    getElement(selector: string, timeout = 5000) {
        return cy.get(selector, { timeout });
    }

    scrollToElement(selector: string) {
        cy.get(selector).scrollIntoView();
    }

    clickElementByText(selector: string, text: string) {
        cy.get(selector).contains(text).click();
    }

    waitForElementVisible(selector: string, timeout = 5000) {
        cy.get(selector, { timeout }).should('be.visible');
    }

    elementExists(selector: string) {
        return cy.get('body').then($body => {
            return $body.find(selector).length > 0;
        });
    }

    setAlias(selector: string, alias: string) {
        cy.get(selector).as(alias);
    }

    forceClickElement(selector: string) {
        cy.get(selector).click({ force: true });
    }

    waitForPageLoadComplete(timeout = 10000) {
        cy.window({ timeout }).should((win) => {
            expect(win.document.readyState).to.equal('complete');
        });
    }

    assertElementContainsText(selector: string, text: string) {
        cy.get(selector).should('include.text', text);
    }

    pressKey(selector: string, key: string) {
        cy.get(selector).type(`{${key}}`);
    }

}
