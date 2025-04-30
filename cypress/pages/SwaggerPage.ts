import {BasePage} from "./BasePage";
import  UserData  from "../fixtures/users.json";

export class SwaggerPage extends BasePage {

    selectors = {
        swaggerPage: 'body',
        apiUrl: 'https://bookcart.azurewebsites.net/swagger/index.html',
        apiLogin:'#operations-Login-post_api_Login > .opblock-summary > .opblock-summary-control > .opblock-summary-path-description-wrapper > .opblock-summary-path > .nostyle > span',
        apiLoginText: '/api/Login',
    }

    navigateToSwagger() {
        this.navigateTo(this.selectors.apiUrl);
    }

    swaggerPageVisible() {
        this.assertElementVisible(this.selectors.swaggerPage);
        this.assertUrlContains(this.selectors.apiUrl);
        this.getCurrentUrl().should('eq', this.selectors.apiUrl);
    }

    existsApiLogin() {
        cy.get(this.selectors.apiLogin).should('be.visible').and('contain.text', this.selectors.apiLoginText).click();
    }

    verifyUserLoginApi() {
        cy.intercept('POST', '**/api/User').as('loginUser');
        cy.request({
            method: 'POST',
            url: '/api/User',
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: {
                username: UserData.User1.userName,
                password: UserData.User1.password,
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.be.oneOf([200, 400, 401]);
        });
    }

}