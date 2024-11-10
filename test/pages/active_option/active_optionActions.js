 const active_optionLocators = require("./active_optionLocators");

 class active_optionActions{

    async clickOnActive_option(){
        await active_optionLocators.clickOnActive_option.click();
    }

    async clickOnZtoA_option(){
        await active_optionLocators.clickOnZtoA_option.click();
    }


 }


 module.exports = new active_optionActions();