import { Selector } from "testcafe";
import common from "../Utils/commonFunctions.js";
import Header from "./headerObjects.js";

const header = new Header();

 export default class Account {
    constructor(){
        this.myAccountButton = Selector("#top-links ul li.dropdown.open ul li:nth-child(1) a");
        this.myAccountText = Selector("#content h2:nth-child(1)");
        this.searchInput = Selector("#search input");
        this.searchButton = Selector("#search span button");
        this.logoButton = Selector("#logo h1 a");
        this.itemText = Selector("#content div:nth-child(8) div div div:nth-child(2) div.caption h4 a");
        this.featuredProduct = Selector("#content div.row div:nth-child(4) div div.image a img");
        this.shoppingCartButton = Selector("#top-links > ul > li:nth-child(4) a");
        this.logoutButton = Selector("#top-links ul li.dropdown.open ul li:nth-child(5) a");
        this.logoutMessage = Selector("#content p:nth-child(2)");
    }

    async openMyAccount(){
        await common.clickElement(header.accountButton);
        await common.clickElement(this.myAccountButton);
    }

    async search(item){
        await common.type(this.searchInput, item);
        await common.clickElement(this.searchButton);
    }

    async logout(){
        await common.clickElement(header.accountButton);
        await common.clickElement(this.logoutButton);
    }
}