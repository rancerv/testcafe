import common from "../Utils/commonFunctions.js";
import Header from "../pageObjectSelectors/headerObjects.js";

const header = new Header();
const name = "Rancer Ventura";
const email = "r.2vm@hotmail.com";
const enquiry = "This is a test";
const contactUsText = "Contact Us";
const currency = "€ Euro";

const firstName = "Rancer";
const lastName = "Ventura";
const registrationEmail = "r.ventura@hotmail.com";
const telephone = "8292203030";
const password = "test01";


fixture("Header's Links")
    .page("http://opencart.abstracta.us/")
    .beforeEach(async () => {
        await common.maximize();
    });

test("Changing currency test", async () => {
    await header.changeCurrency(currency);
    await common.validateText(header.euroButton, currency);
});
    

test("Contact Us's test", async () => {
    await header.contacting(name, email, enquiry);
    await common.validateText(header.h1ContactUs, contactUsText);
});

test("Wish List's test", async () => {
    await header.newCustomerWishList();   
});
