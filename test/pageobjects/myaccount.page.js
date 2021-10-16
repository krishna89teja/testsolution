let Util = require('../../helpers/util');
const report = require('../../helpers/report')
class MyAccount{
    get signout() {return $("//*[@class='logout']")}
    get myAccountHeader() {return $("//h1[text()='My account']")}

    async verifyHeader(){
        await Util.verifyElementExist(this.myAccountHeader,20000);
        await report.addContext("Verified my account page header");
    }
    async selectCategory(category){
        if(category == "women")
            await Util.clickElement($("//ul[contains(@class,'sf-menu')]//li[3]//a[text()='Women']"),10000)
        else if(category == "Dresses")
            await Util.clickElement($("//ul[contains(@class,'sf-menu')]//li[3]//a[text()='Dresses']"),10000)
        else if(category == "t-shirts")
            await Util.clickElement($("//ul[contains(@class,'sf-menu')]//li[3]//a[text()='T-shirts']"),10000)
        else
            throw new Error("Incorrect category value "+category);
        
        await report.addContext("Selected category "+category);
    }
    async selectProduct(productname){
        await Util.clickElement($("//img[@title='"+productname+"']"));
        await report.addContext("selected product "+productname);
    }
    async clickSignOut(){
        await Util.clickElement(this.signout);
        await report.addContext("Clicked on sign out link");
    }

}
module.exports = new MyAccount();