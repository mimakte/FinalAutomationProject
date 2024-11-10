class formLocators{

    get FirstName(){
       return $("//input[@id='first-name']");
    }

    get LastName(){
        return $("//input[@id='last-name']");
    }

    get PostalCode(){
        return $("//input[@id='postal-code']");
    }

    get ContinueButton(){
        return $("//input[@id='continue']");
    }
}

module.exports = new formLocators();