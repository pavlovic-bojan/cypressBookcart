import {BasePage, MyOrders} from "./";
import  UserData  from "../fixtures/users.json";

export class CheckoutPage extends BasePage {
    selectors = {
        checkoutUrl: '/checkout',
        placeOrderButton: '.mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-primary.mat-mdc-button-base',
        cancelButton: '.ms-2.mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-warn.mat-mdc-button-base',
        userNameField: '#mat-input-0',
        userAddressField: '#mat-input-1',
        userAddressField1: '#mat-input-2',
        userPinCodeField: '#mat-input-3',
        userStateField: '#mat-input-4',

        c:'#mat-input-0'
    };

    private myOrders = new MyOrders();

    navigateToCheckoutUrl(): void {
        cy.visit(this.selectors.checkoutUrl);
    }

    completePurchase(): void {
        this.typeIntoField(this.selectors.userNameField, UserData.User1.name);
        this.typeIntoField(this.selectors.userAddressField, UserData.User1.address);
        this.typeIntoField(this.selectors.userAddressField1, UserData.User1.address1);
        this.typeIntoField(this.selectors.userPinCodeField, UserData.User1.pinCode);
        this.typeIntoField(this.selectors.userStateField, UserData.User1.state);
        this.clickElement(this.selectors.placeOrderButton);
        this.myOrders.verifyMyOrdersPage();

    }

}