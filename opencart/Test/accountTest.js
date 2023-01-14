import common from "../Utils/commonFunctions.js";
import account from "../pageObjectSelectors/accountObjects.js";
import loginPage from "../pageObjectSelectors/loginObjects.js";

const username = "r.2vm@hotmail.com";
const password = "R@ncer19";
const accountText = "My Account";
const item = "iPhone";
const logoutText = "You have been logged off your account. It is now safe to leave the computer.";

fixture("POM")
    .page("http://opencart.abstracta.us/")
    .beforeEach(async () => {
        await common.maximize();
        await loginPage.login(username, password);
    });

test('Validate Log Into My Account', async () => {
    await account.openMyAccount();
    await common.validateText(account.myAccountText, accountText);
});
    
test('Search an Item', async () => {
    await account.search(item);
    await common.validateText(account.itemText, item);
});

test('Log out', async () => {
    await account.logout();
    await common.validateText(account.logoutMessage, logoutText);
});
    