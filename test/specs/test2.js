const loginActions = require("../pages/login/loginActions");
const manuActions = require("../pages/manu/manuActions");
const addToCartActions = require("../pages/addToCart/addToCartActions");
const utility = require("../utilities/utility");
const checkOutActions =require("../pages/checkOut/checkOutActions");
const formActions = require("../pages/form/formActions");
const orderMessageActions = require("../pages/orderMessage/orderMessageActions");
const logoutActions = require("../pages/logout/logoutActions");
const Username = "standard_user";
const Password = "secret_sauce";

var firstName ="";
var lastName ="";
var postalCode ="";

describe("Automation for Swag Labs",()=>{

    it("Should able to successfully login and reset app state",async()=>{
        await loginActions.inputUsername(Username);
        await loginActions.inputPassword(Password);
        await loginActions.clickOnSubmitButton();
        await manuActions.manuButton();
        await manuActions.clickOnResetAppState();
        await browser.pause(1000);

    })

    it("Should able to successfully addtocart journey",async()=>{

        await addToCartActions.clickOnFirstitem();
        await addToCartActions.clickOnSeconditem();
        await addToCartActions.clickOnThirditem();
        await addToCartActions.clickOnShoppingCart();
        
    })

    it("Should able to successfully checkout journey",async()=>{

        await checkOutActions.clickOnChekOutButton();
        await browser.pause(1000);
       
    })

    it("Should able to successfully formfillup",async()=>{

        firstName = await utility.createRandomString(5);
        await formActions.FirstName(firstName);
        await browser.pause(1000);
        lastName = await utility.createRandomString(4);
        await formActions.LastName(lastName);
        await browser.pause(1000);
        postalCode = await utility.createRandomString(4);
        await formActions.PostalCode(postalCode);
        await formActions.ContinueButton(); 
        
    })

    it("Should able to verify Item price", async () => { 
        const expectedItemTotal = 55.97;
        const expectedItemTax = 4.48;
        const expectedGrandTotal = expectedItemTotal + expectedItemTax;
    
        var actualItemTotal = await checkOutActions.getItemPrice();
        var actualItemTax = await checkOutActions.getTaxProductPrice();
        var actualGrandTotal = await checkOutActions.getTotalPrice();

        expect(expectedItemTotal).toEqual(actualItemTotal);   
        expect(expectedItemTax).toEqual(actualItemTax); 
        expect(expectedGrandTotal).toEqual(actualGrandTotal);


        await browser.pause(5000); 

    })


    it("Should able to finish purchase and verify order confirmation message", async () => {         
        await orderMessageActions.clickOnFinishButton(); 
        const expectedOrderMessage = "Thank you for your order!";
        const actualOrderMessage = await orderMessageActions.actualOrderMessage();
        expect(expectedOrderMessage).toEqual(actualOrderMessage);
        await browser.pause(5000); 
    })

    it("Should able to successfully logout",async()=>{

        await manuActions.manuButton();
        await manuActions.clickOnResetAppState();
        await browser.pause(1000);
        await logoutActions.clickOnLogoutButton();
        await browser.pause(5000);
        
    })

});