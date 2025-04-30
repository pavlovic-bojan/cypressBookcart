import { LoginPage } from "../../cypress/pages/LoginPage";
import  UserData  from "../../cypress/fixtures/users.json";

describe('Login Tests', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        loginPage.navigateToLogin()
    });

    it('Should show username required error', () => {
        loginPage.typeIntoFieldWithValidation(loginPage.selectors.usernameField, '');
        loginPage.assertUsernameError();
    });

    it('Should show password required error', () => {
        loginPage.typeIntoFieldWithValidation(loginPage.selectors.passwordField, '');
        loginPage.assertPasswordError();
    });

    it('Should login with valid credentials', () => {
        loginPage.login(UserData.User1.userName, UserData.User1.password);
        loginPage.assertAccountIconVisible()
    });

    it('Should show username & password required error', () => {
        loginPage.typeIntoFieldWithValidation(loginPage.selectors.usernameField, '');
        loginPage.typeIntoFieldWithValidation(loginPage.selectors.passwordField, '');
        loginPage.assertUsernameError();
        loginPage.assertPasswordError1();
    });

    it('Attempt login with correct username and incorrect password', () => {
        loginPage.login(UserData.User1.userName, 'wrongPassword');
        loginPage.assertIncorrectError();
    });

    it('Attempt login with correct password and incorrect username', () => {
        loginPage.login( 'wrongUserName',UserData.User1.password);
        loginPage.assertIncorrectError();
    });

});
