import {BasePage, WishlistPage} from "./";

export class CartPage extends BasePage {
    selectors = {
        cartUrl: '/shopping-cart',
        cartItems: '.mat-icon.notranslate.mat-badge.mat-badge-warn.material-icons.mat-ligature-font.mat-icon-no-color.mat-badge-overlap.mat-badge-above.mat-badge-after.mat-badge-medium span#mat-badge-content-0',
        checkoutButton: '.my-2.mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-warn.mat-mdc-button-base',
        proceedButton: '.proceed-button',
    };

    private wishlistPage = new WishlistPage();

    navigateToCart(): void {
        cy.visit(this.selectors.cartUrl);
    }

    addItemToCartAndRemoveFromWishList() {
        this.wishlistPage.navigateToHome();
        this.wishlistPage.add2RandomItemToWishListFromHomePage();
        this.wishlistPage.navigateToWishlist();
        this.wishlistPage.addToCartFromWishListPage();
        this.wishlistPage.removeFromWishList();
    }

    assertCartCount() {
        this.cartItemsCount().then((count) => {
            cy.log(`Cart items count is: ${count}`);
            expect(count).to.be.a('number');
        });
    }

    cartItemsCount() {
        return cy.get(this.selectors.cartItems)
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                const count = parseInt(text, 10);
                cy.log(`Cart items count is: ${count}`);
                return count;
            });
    }

    proceedToCheckout(): void {
        cy.get(this.selectors.checkoutButton).click();
    }

}
