import { Selector } from "testcafe";
import common from "../Utils/commonFunctions.js";

 export default class Header {
    constructor(){
      this.accountButton = Selector("#top-links > ul > li.dropdown > a");
      this.homepageLoginButton = Selector("#top-links ul li.dropdown.open ul li:nth-child(2) a");
    }

 }