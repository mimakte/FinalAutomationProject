const loginLocators = require("./loginLocators");

class loginActions{
    async inputUsername(Username){
        await loginLocators.inputUsername.setValue(Username);
    }

    async inputPassword(Password){
        await loginLocators.inputPassword.setValue(Password);
    }

    async clickOnSubmitButton(){
        await loginLocators.submitButton.click();
    }

    async getErrorElement(){
      return await loginLocators.errorMessage;
      // Epic sadface: Sorry, this user has been locked out.
    }
}

module.exports = new loginActions();