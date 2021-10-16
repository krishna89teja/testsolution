let Util = require('../../helpers/util');
const report = require('../../helpers/report')
class LaunchPage{
    get logo() {return $("//img[@alt='My Store']")}
    get signIn() {return $("//a[@class='login']")}

    async launchURL(){
        console.log("launchurl()");
        let websiteURL = "http://automationpractice.com/index.php"
        await browser.url(websiteURL);
        await report.addContext("launched url "+websiteURL);
    }
    async verifyLogoDisplayed(){
        Util.verifyElementExist(this.logo,30000);
        await report.addContext("Verified logo displayed on launch page");
    }
    async clickOnSignIn(){
        await Util.clickElement(this.signIn);
        await report.addContext("Clicked on sign in link");
    }

}
module.exports = new LaunchPage();