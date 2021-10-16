const util = require('../../helpers/util');
const report = require('../../helpers/report');

class MyStore{
    get addToCart() {return $("//*[text()='Add to cart']/parent::button")}
    get pageHeader() {return $('#page-heading')}

    async clickOnAddToCartButton(){
        await util.clickElement(this.addToCart);
        let successmessageElement = $("//i[@class='icon-ok']/parent::h2");
        let message = "Product successfully added to your shopping cart";
        await util.verifyElementExist(successmessageElement);
        await util.verifyElementText(successmessageElement,message);
        await report.addContext("Clicked on add to card button and verify success message");
    }
    async proceedToCheckOut(){
        let proceedToCheckoutButton = $("//a[@title='Proceed to checkout']");
        await util.clickElement(proceedToCheckoutButton);
        await report.addContext("Clicked on proceed to checkout link");
    }
    async proceedToCheckoutOrderDelivery(){
        let proceedToCheckoutButton = $("//p[@class='cart_navigation clearfix']//a[@title='Proceed to checkout']");
        await util.clickElement(proceedToCheckoutButton);
        await report.addContext("Clicked on proceed to checkout order delivery");
    }
    async proceedToCheckOutPayment(){
        let proceedToCheckoutButton = "//*[contains(text(),'Proceed to checkout')]/parent::button";
        await util.clickElement($(proceedToCheckoutButton));
        await report.addContext("Clicked on proceed to checkout payement");
    }
    async acceptTermsAndConditions(){
        let termsAndConditionscheckbox = '#cgv';
        await util.clickElement($(termsAndConditionscheckbox));
        await report.addContext("Accepted terms and conditions");
    }
    async verifyShoppingCartSummaryHeader(){
        let shoppingCartHeader = $("//h1[@id='cart_title' and contains(text(),'Shopping-cart summary')]");
        await util.verifyElementExist(shoppingCartHeader,10000);
        await report.addContext("Verify shopping card summary header");
    }
    async verifyAddressHeader(){
        let headerElement = $("//h1[@class='page-heading' and contains(text(),'Address')]");
        await util.verifyElementExist(headerElement,10000);
        await report.addContext("Verify address header");
    }
    async verifyShippingHeader(){
        let headerElement = $("//h1[@class='page-heading' and contains(text(),'Shipping')]");
        await util.verifyElementExist(headerElement,10000);
        await report.addContext("Verify shipping header");
    }
    async verifyPaymentMethodHeader(){
        let headerElement = $("//h1[@class='page-heading' and contains(text(),'Please choose your payment method')]");
        await util.verifyElementExist(headerElement,10000);
        await report.addContext("Verify payment method header");
    }
    async verifyProductNameDisplayed(product){
        let productElement = $("//td[@class='cart_product']/parent::*//p[@class='product-name']//a");
        await util.verifyElementExist(productElement,10000);
        await util.verifyElementText(productElement,product);
        await report.addContext("Verify payment method header");
    }

}
module.exports = new MyStore();