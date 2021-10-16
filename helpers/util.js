class Util{

    async verifyElementExist(selector,time=5000,reversevalue = false){
        await selector.waitForExist({ timeout:time, reverse:reversevalue })
        await expect(selector).toBeDisplayed();
    }
    async verifyElementText(selector,message){
        await expect(selector).toHaveTextContaining(message)
    }
    async EnterInputText(selector,inputtext){
        await this.verifyElementExist(selector);
        await selector.setValue(inputtext);
    }
    async verifyElementText(selector,expectedText){
        await expect(selector).toHaveText(expectedText);
    }
    async clickElement(selector,timeout=5000){
        await this.verifyElementExist(selector,timeout);
        await selector.click();
    }
    async selectValueFromDropDown(selector,value){
        await selector.selectByVisibleText(value);
    }
    async selectDate(date){
        let dd = date.split('/')[0];
        let mm = date.split('/')[1];
        let yy = date.split('/')[2];

        await $('#days').selectByVisibleText(dd);
        await $('#months').selectByVisibleText(mm);
        await $('#years').selectByVisibleText(yy);

    }
}
module.exports = new Util();