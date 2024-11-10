const utility = require("../../utilities/utility");
const checkOutLocators = require("./checkOutLocators");

class chekOutActions{

    async clickOnChekOutButton(){
        await checkOutLocators.checkOut.click();
    }
    async getItemPrice(){
        const productPrice = await checkOutLocators.priceFromProductPage.getText();
        const productPriceInNumber = await utility.convertTextToNumberForSubTotal(productPrice);
        return productPriceInNumber;
    }
    
    
    async getTaxProductPrice(){
        const productTax = await checkOutLocators.taxFromProductPage.getText();
        const productPriceTax = await utility.convertTextToNumberForTax(productTax);
        return productPriceTax;
    }
    
    async getTotalPrice(){
        const productTax = await checkOutLocators.TotalPriceFromProductPage.getText();
        const productTotalPrice = await utility.convertTextToNumberForTotal(productTax);
        return productTotalPrice;
    }
    


}


module.exports = new chekOutActions();