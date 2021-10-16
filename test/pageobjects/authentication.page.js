let Util = require('../../helpers/util');
const report = require('../../helpers/report')
class Authentication{
    get header() {return $("//h1[text()='Authentication']")}
    get newAccountHeader() {return $("//*[text()='Create an account']")}
    /**
    * Verify authentication header
    */
    async verifyAuthenticationHeader(){
        await Util.verifyElementExist(this.header,20000);
        await report.addContext("Verified authentication header displayed");
    }
    /**
    * Verify create an account label header 
    */
    async verifyCreateAnAccountHeader(){
        await Util.verifyElementExist(this.newAccountHeader,10000);
        await report.addContext("Entered new email ID under account creation");
    }
    /**
    * Enter email in teh new account text box
    * @param email email id(Ex: Florida)
    */
    async enterNewAccountEmailAddress(email){
        let emailInputText = $('#email_create');
        await Util.EnterInputText(emailInputText,email);
        await report.addContext("Entered new email ID under account creation");
    }
    /**
    * Select Country from the dropdown
    * @param email from the dropdown(Ex: Florida)
    */
    async enterEmailAddress(email){
        let emailInputText = $('#email');
        await Util.EnterInputText(emailInputText,email);
        await report.addContext("email id" +email);
    }
    async enterPassword(passwd){
        let passwdInputText = $('#passwd');
        await Util.EnterInputText(passwdInputText,passwd);
        await report.addContext("Entered password");
    }

    async clickOnCreateAnAccount(){
        let signInButton = $('#SubmitCreate');
        await Util.clickElement(signInButton);
        await report.addContext("Clicked on create an account button");
    }
    async clickSignIn(){
        let signInButton = $('#SubmitLogin');
        await Util.clickElement(signInButton);
        await report.addContext("Clicked on sign in button");
    }
    async verifyAlreadyRegistered(){
        await Util.verifyElementExist($("//*[text()='Already registered?']"),10000);
        await report.addContext("Verified Already registered text on authentication page");
    }
    
}
module.exports = new Authentication();