import { Selector } from "testcafe";
import common from "../Utils/commonFunctions.js";

 export default class footer {
    constructor(){
         this.aboutUs = Selector("body footer div div div:nth-child(1) ul li:nth-child(1) a");
         this.DeliveryInformation = Selector("body footer div div div:nth-child(1) ul li:nth-child(2) a");
    }

 }