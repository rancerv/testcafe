import { Selector } from "testcafe";
import common from "../Utils/commonFunctions.js";
import Header from "./headerObjects.js";

const header = new Header();

 export default class LoginPage {
    constructor(){
        this.firstNameInput = Selector("#input-firstname");
        this.lastNameInput = Selector("##input-lastname");
        this.emailInput = Selector("#input-email");
        this.telephoneInput = Selector("#input-telephone");
        this.registerPasswordInput = Selector("#input-password");
        this.registerPasswordConfirmInput = Selector("#input-confirm");
        this.privacyPolicyCheckMark = Selector("#content form div div input[type=checkbox]:nth-child(2)");
        this.continueButton = Selector("#content form div div input.btn.btn-primary");
        this.usernameInput = Selector("#input-email");
        this.passwordInput = Selector("#input-password");
        this.loginButton = Selector("#content div div:nth-child(2) div form > input");
    }

    async register(firstName, lastName, email, telephone, password){
        await common.clickElement(header.accountButton);
        await common.clickElement(header.registerButton);
        await common.type(this.firstNameInput, firstName);
        await common.type(this.lastNameInput, lastName);
        await common.type(this.emailInput, email);
        await common.type(this.telephoneInput, telephone);
        await common.type(this.registerPasswordInput, password);
        await common.type(this.registerPasswordConfirmInput, password);
        await common.clickElement(this.privacyPolicyCheckMark);
        await common.clickElement(this.continueButton);
    }

    async login(username, password){
        await common.clickElement(header.accountButton);
        await common.clickElement(header.homepageLoginButton);
        await common.type(this.usernameInput, username);
        await common.type(this.passwordInput, password);
        await common.clickElement(this.loginButton);
    }

 }

