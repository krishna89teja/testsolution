const LoginPage = require('../pageobjects/login.page');
const launchPage = require('../pageobjects/launch.page');
const authenticationPage = require('../pageobjects/authentication.page');
const accountCreationPage = require('../pageobjects/accountcreation.page');
const myaccountPage = require('../pageobjects/myaccount.page');
const mystorePage = require('../pageobjects/mystore.page');

const testdata = require('../../testdata/personalinformation.json');
describe('Shopping website - automationpractice', () => {
    it('should login with valid credentials', async() => {
        await LoginPage.open();
        await launchPage.verifyLogoDisplayed();
    });
    it("click on sign in and verify authentication page",async ()=>{
        await launchPage.clickOnSignIn();
        await authenticationPage.verifyAuthenticationHeader();
        await authenticationPage.verifyCreateAnAccountHeader();
    })
    it("Enter new email address and navigate to account creation page",async()=>{
        await authenticationPage.enterNewAccountEmailAddress(testdata.personal_info.Email);
        await authenticationPage.clickOnCreateAnAccount();
        await accountCreationPage.verifyPersonalInformationHeader();
    })
    it("Enter personal details",async ()=>{

        //await accountCreationPage.selectTitle(testdata.personal_info.Title);
        await accountCreationPage.enterpersonalInformation(testdata.personal_info);
        //await accountCreationPage.selectDataValue(testdata.address.DateOfBirth);
        await accountCreationPage.selectState(testdata.address.State)
        await accountCreationPage.selectCountry(testdata.address.Country)
    })
    it("register account",async()=>{
        await accountCreationPage.clickRegisterButton();
    })
    it("Sign out from the application ",async()=>{
        await myaccountPage.clickSignOut();
        await authenticationPage.verifyAuthenticationHeader();
    })
    it("login into application",async ()=>{
        await launchPage.clickOnSignIn();
        await authenticationPage.verifyAlreadyRegistered();
        await authenticationPage.enterEmailAddress(testdata.loggedinInfo.regemail);
        await authenticationPage.enterPassword(testdata.loggedinInfo.regpass);
        await authenticationPage.clickSignIn();
    })
    it("Select the product",async()=>{
        await myaccountPage.verifyHeader()
        await myaccountPage.selectCategory(testdata.productinfo.category);
        await myaccountPage.selectProduct(testdata.productinfo.productname);
    })
    it("Verify product added to cart and proceed to checkout",async()=>{
        await mystorePage.clickOnAddToCartButton();
        await mystorePage.proceedToCheckOut();
    })
    it("Verify shopping cart summary page and verify product details",async()=>{
        await mystorePage.verifyShoppingCartSummaryHeader();
        await mystorePage.verifyProductNameDisplayed(testdata.productinfo.productname);
    })
    it("Proceed to checkout address verification", async ()=>{
        await mystorePage.verifyShoppingCartSummaryHeader();
        await mystorePage.proceedToCheckoutOrderDelivery();
    })
    it("Proceed to checkout shipping",async()=>{
        await mystorePage.verifyShippingHeader();
        await mystorePage.proceedToCheckOutPayment();
    })
    it("Accept terms and condition and proceed to checkout payment",async()=>{
        await mystorePage.acceptTermsAndConditions();
        await mystorePage.proceedToCheckOutPayment();
    })
    it("Verify Payment page displayed",async()=>{
        await mystorePage.verifyPaymentMethodHeader();
    })
});


