import common from "../Utils/commonFunctions.js";
import footer from "../pageObjectSelectors/footerObjects.js";

const aboutText = "Terms & Conditions";

fixture("Footer's Links")
    .page("http://opencart.abstracta.us/")
    .beforeEach(async () => {
        await common.maximize();
    });

test("Information's test", async () => {
    await footer.informationLinks();
    await common.validateText(footer.h1TermsConditions, aboutText);
});