class active_optionLocators{

    get clickOnActive_option(){
        return $("//select[@class='product_sort_container']");

    }

     get clickOnZtoA_option(){
        return $("//select[@class='product_sort_container']/option[@value='za']");

    }
}





module.exports = new active_optionLocators();