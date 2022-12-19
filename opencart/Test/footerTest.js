import common from "../Utils/commonFunctions.js";
import Account from "../pageObjectSelectors/accountObjects.js";
import Cart from "../pageObjectSelectors/cartObjects.js";
import LoginPage from "../pageObjectSelectors/loginObjects.js";

const account = new Account();
const cart = new Cart();
const loginPage = new LoginPage();
const logoutText = "You have been logged off your account. It is now safe to leave the computer.";

fixture("Footer's Links")
    .page("http://opencart.abstracta.us/")
    .beforeEach(async () => {
        await common.maximize();
        await loginPage.login(username, password);
    });

test('', async () => {
    await account.logout();
    await common.validateText(account.logoutMessage, logoutText);
});
    