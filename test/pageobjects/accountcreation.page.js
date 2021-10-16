const util = require('../../helpers/util');
let Util = require('../../helpers/util');
const report = require('../../helpers/report')

class AccountCreation{
    get header(){ return $("//h1[text()='Create an account']")}

    /**
    * Verifies account header
    */
    async verifyHeader(){
        await Util.verifyElementExist(this.header,20000);
        report.addContext("Verified create an account header");
    }
    /**
    * Verifies personal information header
    */
    async verifyPersonalInformationHeader(){
        await Util.verifyElementExist($("//*[text()='Your personal information']"),10000)
        report.addContext("Verified personal information header");
    }
    /**
    * Select title (radio button) on personal information
    * @param title to be selected (e.g. mr./mrs.)
    */
    async selectTitle(title){
        let titleElement = null;
        if(title.toLowerCase() == "mr.")
            titleElement = "//div[@id='uniform-id_gender1']//input";
        else if(titleElement.toLowerCase() == "mrs.")
            titleElement = "//div[@id='uniform-id_gender2']//input";
        else
            throw new Error("Invalid title "+title);
        await Util.clickElement($(titleElement),10000);
        report.addContext("selected title radio button as "+title);
    }
    /**
    * Enters personal data (input text) on account creation page
    * @param details of personal data (e.g. firstname,lastname,email,password,)
    */
    async enterpersonalInformation(details){
        let element = null;
        for(const key of Object.keys(details)){
            switch(key.toLowerCase()){
                case "firstname":
                    element = $('#customer_firstname')
                    await Util.EnterInputText(element,details[key]);
                    break;
                case "lastname":
                    element = $('#customer_lastname')
                    await Util.EnterInputText(element,details[key]);
                    break;
                case "email":
                    element = $('#email')
                    await Util.EnterInputText(element,details[key]);
                    break;
                case "password":
                    element = $('#passwd')
                    await Util.EnterInputText(element,details[key]);
                    break;
                case "address_firstname":
                    element = $('#firstname')
                    await Util.EnterInputText(element,details[key]);
                    break;
                case "address_lastname":
                    element = $('#lastname')
                    await Util.EnterInputText(element,details[key]);
                    break;
                case "company":
                    element = $('#company')
                    await Util.EnterInputText(element,details[key]);
                    break;
                case "address":
                    element = $('#address1')
                    await Util.EnterInputText(element,details[key]);
                    break;
                case "city":
                    element = $('#city')
                    await Util.EnterInputText(element,details[key]);
                    break;
                case "zip":
                    element = $('#postcode')
                    await Util.EnterInputText(element,details[key]);
                    break;
                case "homephone":
                    element = $('#phone')
                    await Util.EnterInputText(element,details[key]);
                    break;
                case "mobilephone":
                    element = $('#phone_mobile')
                    await Util.EnterInputText(element,details[key]);
                    break;
                case "aliasaddress":
                    element = $('#alias')
                    await Util.EnterInputText(element,details[key]);
                    break;
                default:
                    throw new Error("Invalid field "+key);
            }
            await report.addContext("Entered input value "+details[key]+ " for field "+key);
        }
    }
    /**
    * Select date,month,year from the date of birth drop downs
    * @param date of birth personal data (e.g. 09/01/1999)
    */
    async selectDataValue(date){
        await Util.selectDate(date);
        await report.addContext("selected date "+date);
    }
    /**
    * Select Country from the dropdown
    * @param countryname from the dropdown(Ex: United states)
    */
    async selectCountry(countryname){
        let countryElement = $('#uniform-id_country');
        await Util.selectValueFromDropDown(countryElement,countryname);
        await report.addContext("selected country from dropdown "+countryname);
    }
    /**
    * Select Country from the dropdown
    * @param statename from the dropdown(Ex: Florida)
    */
    async selectState(statename){
        let stateElement = $('#id_state');
        await Util.selectValueFromDropDown(stateElement,statename);
        await report.addContext("selected state from dropdown "+countryname);
    }
    /**
    * Click register button
    */
    clickRegisterButton(){
        let registerbutton = $("//*[text()='Register']/parent::button");
        Util.clickElement(registerbutton);
    }
}
module.exports = new AccountCreation();
