import { SwaggerPage } from "../../cypress/pages/SwaggerPage";

describe('Swagger API Test', () => {
    const swaggerPage = new SwaggerPage();

    beforeEach(() => {
        swaggerPage.navigateToSwagger()
    });

    it('Should be on swagger page', () => {
        swaggerPage.swaggerPageVisible()
    });

    it('API login should exists on swagger page', () => {
        swaggerPage.existsApiLogin()
    });

    it('Verify api login should works', () => {
        swaggerPage.verifyUserLoginApi()
    });

});
