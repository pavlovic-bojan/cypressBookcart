declare namespace Cypress {
    interface Chainable {
        loginSession(): Chainable<void>;
    }
}
