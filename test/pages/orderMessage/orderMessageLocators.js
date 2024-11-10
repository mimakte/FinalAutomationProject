class orderMessageLocators{

    get buttonFinish(){
        return  $("//button[@class='btn btn_action btn_medium cart_button' and @id='finish']");
      }

    get OrderMessage() {
        return  $("//h2[@class='complete-header' and contains(text(), 'Thank you for your order!')]");
     }
}


module.exports = new orderMessageLocators();