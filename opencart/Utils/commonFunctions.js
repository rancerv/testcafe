import { t } from "testcafe";

class Common {

    async clickElement(testObject){
        await t
            .click(testObject);
    }

    async type(testObject, text){
        await t
            .typeText(testObject, text);
    }

    async maximize(){
        await t
            .maximizeWindow();
    }

    async checkExist(testObject){
        await t
            .expect(await testObject.exists).ok();
    }

    async validateText(testObject, text){
        await t
            .expect(await testObject.innerText).eql(text);
    }

    async valueMessure(testObject){
        await t
            .expect(await testObject.value).notEql(0);
    }
        
}

export default new Common();