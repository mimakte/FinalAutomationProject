class login{
    get inputUsername(){
        return $("//input[@placeholder='Username']");
    }

    get inputPassword(){
        return $("//input[@placeholder='Password']");
    }

    get submitButton(){
       return $("//input[@type='submit']");
    }

    get errorMessage(){
        //return $("//div[@class='error-message-container error']");
        return $(".error-message-container > h3");
    }
}


module.exports = new login();