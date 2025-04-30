import { WishlistPage, LoginPage } from '../../cypress/pages';
import UserData from "../../cypress/fixtures/users.json";

describe('Wishlist Tests', () => {
    const wishlistPage = new WishlistPage();
    const loginPage = new LoginPage();

    beforeEach(() => {
        loginPage.navigateToLogin();
        loginPage.login(UserData.User1.userName, UserData.User1.password);
        wishlistPage.navigateToHome();
    });

    it('Should be on home page', () => {
        wishlistPage.verifyWishlistPage();
    });

    it('Should be added first 2 item to wishlist on home page', () => {
        wishlistPage.add2RandomItemToWishListFromHomePage();
        wishlistPage.assertWishlistCount();
    });

    it('Should be clear wish list', () => {
        wishlistPage.add2RandomItemToWishListFromHomePage();
        wishlistPage.clearWishList();
    });

    it('Should be on wishlist page', () => {
        wishlistPage.navigateToWishlist();
    });

});
