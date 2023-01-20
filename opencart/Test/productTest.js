import common from "../Utils/commonFunctions.js";
import cart from "../pageObjectSelectors/cartObjects.js";
import loginPage from "../pageObjectSelectors/loginObjects.js";
import products from "../pageObjectSelectors/productsObjects.js";

const username = "r.2vm@hotmail.com";
const password = "R@ncer19";

fixture("Product's Test")
    .page("http://opencart.abstracta.us/")
    .beforeEach(async () => {
        await common.maximize();
        await loginPage.login(username, password);
    });

    test('Make an Order', async () => {
        await products.submitOrder();
        //await common.valueMessure(cart.quantityInput);
    });
    
    