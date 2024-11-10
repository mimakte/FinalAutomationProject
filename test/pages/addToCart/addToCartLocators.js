class addToCartLocators{
    get firstitem(){
     return $("//button[@id='add-to-cart-sauce-labs-backpack']");
     
     }

    get seconditem(){
        return $("//button[@id='add-to-cart-sauce-labs-bike-light']");
        
       }

    get thirditem(){
        return $("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']");
        
       }

       get tShirt(){
        return $("//button[@name='add-to-cart-test.allthethings()-t-shirt-(red)']")
       }

    get buttonShoppingCart(){
    return $("//a[@class='shopping_cart_link']");
     }

    


   
   
}

module.exports = new addToCartLocators();