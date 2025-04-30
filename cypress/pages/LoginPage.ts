import { BasePage } from './BasePage';
import messages from '../fixtures/messages.json';

export class LoginPage extends BasePage {
    selectors = {
        usernameField: 'input[formcontrolname="username"]',
        passwordField: 'input[formcontrolname="password"]',
        loginButton: '.mat-mdc-card-actions > .mdc-button > .mdc-button__label',
        fieldRequestedError: 'mat-error[id="mat-mdc-error-0"]',
        fieldRequestedError1: 'mat-error[id="mat-mdc-error-1"]',
        accountIcon: 'mat-icon[data-mat-icon-type="font"]',
        loginUrl:'/login'
    };

    private errorMessages = messages.LoginPage;

    navigateToLogin() {
        this.navigateTo(this.selectors.loginUrl);
    }
    typeIntoFieldWithValidation(fieldSelector: string, value: string) {
        cy.get(fieldSelector).click().clear();
        if (value) {
            cy.get(fieldSelector).type(value);
        } else {
            cy.get(fieldSelector).blur();
        }
    }

    assertFieldError(errorSelector: string, expectedMessage: string) {
        cy.get(errorSelector).should('be.visible').and('contain.text', expectedMessage);
    }

    clickLoginButton() {
        cy.get(this.selectors.loginButton).should('be.visible').click();
    }

    login(username: string, password: string) {
        this.typeIntoFieldWithValidation(this.selectors.usernameField, username);
        this.typeIntoFieldWithValidation(this.selectors.passwordField, password);
        this.clickLoginButton();
    }

    assertUsernameError() {
        this.assertFieldError(this.selectors.fieldRequestedError, this.errorMessages.usernameRequired);
    }

    assertPasswordError() {
        this.assertFieldError(this.selectors.fieldRequestedError, this.errorMessages.passwordRequired);
    }

    assertPasswordError1() {
        this.assertFieldError(this.selectors.fieldRequestedError1, this.errorMessages.passwordRequired);
    }

    assertIncorrectError() {
        this.assertFieldError(this.selectors.fieldRequestedError, this.errorMessages.incorrectError);
    }

    assertAccountIconVisible() {
        cy.get(this.selectors.accountIcon).should('be.visible');
    }
}
