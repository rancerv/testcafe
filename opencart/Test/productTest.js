import common from "../Utils/commonFunctions.js";
import Cart from "../pageObjectSelectors/cartObjects.js";
import LoginPage from "../pageObjectSelectors/loginObjects.js";
import Products from "../pageObjectSelectors/productsObjects.js";

const product = new Products();
const cart = new Cart();
const loginPage = new LoginPage();
const username = "r.2vm@hotmail.com";
const password = "R@ncer19";

fixture("Product's Test")
    .page("http://opencart.abstracta.us/")
    .beforeEach(async () => {
        await common.maximize();
        await loginPage.login(username, password);
    });

    test('Make an Order', async () => {
        await product.submitOrder();
        //await common.valueMessure(cart.quantityInput);
    });
    
    