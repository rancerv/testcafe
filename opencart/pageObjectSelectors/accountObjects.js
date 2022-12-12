import { Selector } from "testcafe";
import common from "../Utils/commonFunctions.js";

 export default class Account {
    constructor(){
        this.accountButton = Selector("#top-links > ul > li.dropdown > a");
        this.homepageLoginButton = Selector("#top-links ul li.dropdown.open ul li:nth-child(2) a");
        this.usernameInput = Selector("#input-email");
        this.passwordInput = Selector("#input-password");
        this.loginButton = Selector("#content div div:nth-child(2) div form > input");
        this.myAccountButton = Selector("#top-links ul li.dropdown.open ul li:nth-child(1) a");
        this.myAccountText = Selector("#content h2:nth-child(1)");
        this.searchInput = Selector("#search input");
        this.searchButton = Selector("#search span button");
        this.logoButton = Selector("#logo h1 a");
        this.itemText = Selector("#content div:nth-child(8) div div div:nth-child(2) div.caption h4 a");
        this.featuredProduct = Selector("#content div.row div:nth-child(4) div div.image a img");
        this.optionInput = Selector("#input-option226");
        this.optionSelection = Selector("#input-option226 option:nth-child(2)");
        this.cartButton = Selector("#button-cart");
        this.shoppingCartButton = Selector("#top-links > ul > li:nth-child(4) a");
        this.quantityInput = Selector("#content form div table tbody tr td:nth-child(4) div input");
        this.logoutButton = Selector("#top-links ul li.dropdown.open ul li:nth-child(5) a");
        this.logoutMessage = Selector("#content p:nth-child(2)");
    }

    async login(username, password){
        await common.clickElement(this.accountButton);
        await common.clickElement(this.homepageLoginButton);
        await common.type(this.usernameInput, username);
        await common.type(this.passwordInput, password);
        await common.clickElement(this.loginButton);
    }

    async openMyAccount(){
        await common.clickElement(this.accountButton);
        await common.clickElement(this.myAccountButton);
    }

    async search(item){
        await common.type(this.searchInput, item);
        await common.clickElement(this.searchButton);
    }

    async submitOrder(){
        await common.clickElement(this.logoButton);
        await common.clickElement(this.featuredProduct);
        await common.clickElement(this.optionInput);
        await common.clickElement(this.optionSelection);
        await common.clickElement(this.cartButton);
        await common.clickElement(this.shoppingCartButton);
    }

    async logout(){
        await common.clickElement(this.accountButton);
        await common.clickElement(this.logoutButton);
    }
}