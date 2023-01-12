import { Selector } from "testcafe";
import common from "../Utils/commonFunctions.js";
import Account from "./accountObjects.js";

const account = new Account();

 export default class Products {
    constructor(){
        this.optionInput = Selector("#input-option226");
        this.optionSelection = Selector("#input-option226 option:nth-child(2)");
        this.cartButton = Selector("#button-cart");
    }

    async submitOrder(){
        await common.clickElement(account.logoButton);
        await common.clickElement(account.featuredProduct);
        await common.clickElement(this.optionInput);
        await common.clickElement(this.optionSelection);
        await common.clickElement(this.cartButton);
        await common.clickElement(account.shoppingCartButton);
    }

 }