
document.getElementById('btn-submit').addEventListener('click', function(){
    const priceAmount = document.getElementById('price-Amount');
    const priceAmountValuestring = priceAmount.value;
    const priceAmountValue = parseFloat(priceAmountValuestring);
   

    const discountAmount = document.getElementById('discount');
    const discountAmountValueString = discountAmount.value;
    const discount = parseFloat(discountAmountValueString);
    
    const discountPrice = priceAmountValue - (priceAmountValue * discount/100);
    

    const outputPrice = document.getElementById('output');
    const outputPriceValueString = outputPrice.innerText;
    const output = parseFloat(outputPriceValueString);


    outputPrice.innerText = discountPrice;
})