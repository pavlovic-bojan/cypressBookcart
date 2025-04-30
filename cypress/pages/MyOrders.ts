import {BasePage} from "./";

export class MyOrders extends BasePage {

    selectors = {
        myOrdersUrl: '/myorders',
        orderDetailsButton: '.mat-elevation-z4.mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-primary.mat-mdc-button-base',
        orderStatus: '.mat-elevation-z4.mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-warn.mat-mdc-button-base',
        orderStatusText: ' Order Status ',
        orderDetails: '.mat-elevation-z4.mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-primary.mat-mdc-button-base',
    };

    navigateToMyOrders(): void {
        cy.visit(this.selectors.myOrdersUrl);
    }

    verifyMyOrdersPage() {
        this.assertUrlContains(this.selectors.myOrdersUrl);
        this.getCurrentUrl().should('contain', this.selectors.myOrdersUrl);
    }

}