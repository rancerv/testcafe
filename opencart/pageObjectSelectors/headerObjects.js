import { Selector } from "testcafe";
import common from "../Utils/commonFunctions.js";


 export default class Header {
    constructor(){
      this.currencyButton = Selector("#form-currency div >button");
      this.euroButton = Selector("#form-currency div ul li:nth-child(1) button");
      this.poundSterlingButton = Selector("#form-currency div ul li:nth-child(2) button");
      this.usDollarButton = Selector("#form-currency div ul li:nth-child(3) button");
      this.contactUs = Selector("#top-links ul li:nth-child(1) a");
      this.inputName = Selector("#input-name");
      this.inputEmail = Selector("#input-email");
      this.inputEnquiry = Selector("#input-enquiry");
      this.submitButton = Selector("#content > form > div div input");
      this.h1ContactUs = Selector("#content h1");
      this.accountButton = Selector("#top-links > ul > li.dropdown > a");
      this.registerButton = Selector("#top-links ul li.dropdown.open ul li:nth-child(1) a");
      this.homepageLoginButton = Selector("#top-links ul li.dropdown.open ul li:nth-child(2) a");
      this.wishList = Selector("#top-links ul li:nth-child(4) a");
      this.newCustomerH2 = Selector("#content div div:nth-child(1) div h2");
      this.continueButton = Selector("#content div div:nth-child(1) div a");
      this.returningCustomerH2 = Selector("#content div div:nth-child(2) div h2");
      this.shoppingCart = Selector("#top-links ul li:nth-child(4) a");
      this.checkout = Selector("#top-links ul li:nth-child(5) a");
    }
    
    async contacting(name, email, enquiry){
      await common.clickElement(this.contactUs);
      await common.type(this.inputName, name);
      await common.type(this.inputEmail, email);
      await common.type(this.inputEnquiry, enquiry);
    }

    async changeCurrency(currency){
      await common.clickElement(this.currencyButton);
      if (await this.usDollarButton.innerText == currency){
          await common.clickElement(this.usDollarButton);
      } else if (await this.euroButton.innerText == currency) {
                await common.clickElement(this.euroButton);
      } else if(await this.poundSterlingButton.innerText == currency) {
                await common.clickElement(this.poundSterlingButton);
      } else {
          console.log("Error: Please select an option from the ones available, which are: \n 1- € Euro \n 2- £ Pound Sterling \n 3- $ US Dollar");
      }

    }

    async newCustomerWishList(){
      await common.clickElement(this.wishList);      
  }
}


 