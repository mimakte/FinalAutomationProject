class manuLocators{
    get manuButton(){
        return $("//button[@id='react-burger-menu-btn']");
    }

    get resetAppState(){
    return $("//a[@id='reset_sidebar_link']");
}
}




module.exports = new manuLocators();