class logoutLocators{

    get clickOnLogoutButton(){
        return $("//a[@id='logout_sidebar_link']");
    }
}

module.exports = new logoutLocators();