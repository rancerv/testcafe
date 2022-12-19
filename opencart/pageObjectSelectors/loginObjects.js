import { Selector } from "testcafe";
import common from "../Utils/commonFunctions.js";
import Header from "./headerObjects.js";

const header = new Header();

 export default class LoginPage {
    constructor(){
        this.usernameInput = Selector("#input-email");
        this.passwordInput = Selector("#input-password");
        this.loginButton = Selector("#content div div:nth-child(2) div form > input");
    }

    async login(username, password){
        await common.clickElement(header.accountButton);
        await common.clickElement(header.homepageLoginButton);
        await common.type(this.usernameInput, username);
        await common.type(this.passwordInput, password);
        await common.clickElement(this.loginButton);
    }
 }