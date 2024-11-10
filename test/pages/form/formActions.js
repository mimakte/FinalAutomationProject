const formLocators = require("./formLocators");

class formActions{
    async FirstName(firstName){
        await formLocators.FirstName.setValue(firstName);

    }

    async LastName(lastName){
        await formLocators.LastName.setValue(lastName);

    }
    async PostalCode(postalCode){
        await formLocators.PostalCode.setValue(postalCode);

    }

    async ContinueButton(){
        await formLocators.ContinueButton.click();
    }
}

module.exports = new formActions();