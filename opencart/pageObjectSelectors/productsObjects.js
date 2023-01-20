import { Selector } from "testcafe";
import common from "../Utils/commonFunctions.js";
import account from "./accountObjects.js";
import header from "./headerObjects.js";

class Products {
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
        await common.clickElement(header.shoppingCart);
    }

}

export default new Products();