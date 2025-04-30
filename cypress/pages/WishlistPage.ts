import { BasePage } from "./BasePage";

export class WishlistPage extends BasePage {

    selectors ={
        homeUrl: '/',
        wishlistUrl: '/wishlist',
        clearWishListButton: '.mat-elevation-z4.mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-unthemed.mat-mdc-button-base',
        clearWishListButtonText: ' Clear Wishlist ',
        wishlistItems: '.mat-icon.notranslate.mat-badge.mat-badge-warn.material-icons.mat-ligature-font.mat-icon-no-color.mat-badge-overlap.mat-badge-above.mat-badge-after.mat-badge-medium span',
        addToWishListButton: 'app-addtowishlist',
        addToCartButtonWishListPage: '.mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-primary.mat-mdc-button-base',
        removeFromWishListButton: '.mdc-button.mdc-button--raised.mat-mdc-raised-button.wishlisted.mat-unthemed.mat-mdc-button-base.ng-star-inserted',
    }

    navigateToHome() {
        this.navigateTo(this.selectors.homeUrl);
    }

    navigateToWishlist() {
        this.navigateTo(this.selectors.wishlistUrl);
    }

    verifyWishlistPage() {
        this.assertUrlContains(this.selectors.homeUrl);
        this.getCurrentUrl().should('contain', this.selectors.homeUrl);
        this.wishlistItemsIsVisible();
        this.assertWishlistCount();
    }

    wishlistItemsIsVisible() {
        return cy.get(this.selectors.wishlistItems).eq(0).should('be.visible');
    }

    clearWishList() {
        this.navigateToWishlist();
        cy.get(this.selectors.clearWishListButton)
            .should('be.visible')
            .and('contain.text', this.selectors.clearWishListButtonText)
            .click();
    }

    add2RandomItemToWishListFromHomePage() {
        cy.get(this.selectors.addToWishListButton).should('have.length.greaterThan', 1) // Verifikujmo da ima više od jednog dugmeta
            .then(($buttons) => {
                const randomIndex1 = Math.floor(Math.random() * $buttons.length);
                let randomIndex2;

                do {
                    randomIndex2 = Math.floor(Math.random() * $buttons.length);
                } while (randomIndex1 === randomIndex2);

                cy.wrap($buttons[randomIndex1]).click();
                cy.wrap($buttons[randomIndex2]).click();
            });
    }

    addToCartFromWishListPage() {
        cy.get(this.selectors.addToCartButtonWishListPage).first().should('be.visible').click();
    }

    removeFromWishList() {
        cy.get(this.selectors.removeFromWishListButton).first().should('be.visible').click();
    }

    assertWishlistCount() {
        this.wishlistItemsCount().then((count) => {
            cy.log(`Wishlist items count is: ${count}`);
            expect(count).to.be.a('number');
        });
    }

    wishlistItemsCount() {
        return cy.get(this.selectors.wishlistItems)
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                const count = parseInt(text, 10);
                cy.log(`Wishlist items count is: ${count}`);
                return count;
            });
    }

}
