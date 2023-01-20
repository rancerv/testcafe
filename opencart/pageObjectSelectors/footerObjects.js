import { Selector } from "testcafe";
import common from "../Utils/commonFunctions.js";

class Footer {
  constructor(){
      this.aboutUs = Selector("body footer div div div:nth-child(1) ul li:nth-child(1) a");
      this.deliveryInformation = Selector("body footer div div div:nth-child(1) ul li:nth-child(2) a");
      this.privacyPolocy = Selector("body footer div div div:nth-child(1) ul li:nth-child(3) a");
      this.termsConditions = Selector("body footer div div div:nth-child(1) ul li:nth-child(4) a");
      this.h1TermsConditions = Selector("#content h1");
  }

  async informationLinks(){
    await common.clickElement(this.aboutUs);
    await common.clickElement(this.deliveryInformation);
    await common.clickElement(this.privacyPolocy);
    await common.clickElement(this.termsConditions);
  }


}

export default new Footer();