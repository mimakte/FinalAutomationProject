const addToCartLocators = require("./addToCartLocators");
//const utility = require("../../utilities/utility");

class addToCartActions{

    async clickOnFirstitem(){
        await addToCartLocators.firstitem.click();
        //await browser.pause(1000);
      }

      async clickOnSeconditem(){
        await addToCartLocators.seconditem.click();
        //await browser.pause(1000);
      }

      async clickOnThirditem(){
        await addToCartLocators.thirditem.click();
        await browser.pause(1000);
      }


      async clickOnTshirt(){
         await addToCartLocators.tShirt.click();
      }

    async clickOnShoppingCart(){
        await addToCartLocators.buttonShoppingCart.click();
        await browser.pause(1000);

    }

    
}

module.exports = new addToCartActions();