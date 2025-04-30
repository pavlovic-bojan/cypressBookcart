import { LoginPage, CartPage, WishlistPage, CheckoutPage } from "../../cypress/pages";

describe('Cart Tests', () => {
    const loginPage = new LoginPage();
    const cartPage = new CartPage();
    const wishlistPage = new WishlistPage();
    const checkoutPage = new CheckoutPage();

    beforeEach(() => {
        loginPage.navigateToLogin()
        cy.loginSession();
    });

    it('Should add item to cart and remove from wishlist', () => {
        cartPage.addItemToCartAndRemoveFromWishList();
    });

    it('Should count wishlist & count add to cart badge', () => {
        wishlistPage.assertWishlistCount();
        cartPage.assertCartCount();
    });

    it('Should be on cart page', () => {
        cartPage.navigateToCart();
    });

    it('Should be finis buying process', () => {
        cartPage.addItemToCartAndRemoveFromWishList();
        cartPage.navigateToCart();
        cartPage.proceedToCheckout();
        checkoutPage.navigateToCheckoutUrl();
        checkoutPage.completePurchase();
    });

});
