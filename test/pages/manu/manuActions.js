const manuLocators = require("./manuLocators");

class manuActions{
    async manuButton(){
        await manuLocators.manuButton.click();
    }

    async clickOnResetAppState(){
        await manuLocators.resetAppState.click();
    }
}

module.exports = new manuActions();