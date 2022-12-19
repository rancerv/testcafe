import { Selector } from "testcafe";
import common from "../Utils/commonFunctions.js";

 export default class Product {
    constructor(){
        this.optionInput = Selector("#input-option226");
        this.optionSelection = Selector("#input-option226 option:nth-child(2)");
        this.cartButton = Selector("#button-cart");
    }

 }