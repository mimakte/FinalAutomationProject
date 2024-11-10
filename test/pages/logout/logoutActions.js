const logoutLocators = require ("./logoutLocators");

class logoutActions{
    async clickOnLogoutButton(){
        await logoutLocators.clickOnLogoutButton.click();
    }

}

module.exports = new logoutActions();