class checkOutLocators{

get checkOut(){
      return $("//button[@id='checkout']");
}

get priceFromProductPage(){
    return $("//div[@class='summary_subtotal_label']");
}

get taxFromProductPage(){
    return $("//div[@class='summary_tax_label']");
}

get TotalPriceFromProductPage(){
    return $("//div[@class='summary_total_label']");
}


}



module.exports = new checkOutLocators();
