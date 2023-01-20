import { Selector } from "testcafe";
import common from "../Utils/commonFunctions.js";

class Cart {
    constructor(){
        this.quantityInput = Selector("#content form div table tbody tr td:nth-child(4) div input");
    }

 }

 export default new Cart();