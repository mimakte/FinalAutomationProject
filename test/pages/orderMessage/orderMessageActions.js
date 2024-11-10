const orderMessageLocators = require("./orderMessageLocators");

class orderMessageActions{


    async clickOnFinishButton(){
        await orderMessageLocators.buttonFinish.click();
    }

    async actualOrderMessage(){
        const purchaseOrderMessage =  await orderMessageLocators.OrderMessage.getText();
        return purchaseOrderMessage;    
     }

}

module.exports = new orderMessageActions();