function yardCleaning(input){
    let priceForCleaning = 7.61;
    let yardsize = Number(input[0]);
    let totalPrice = yardsize * priceForCleaning;
    let discount = 0.18 * totalPrice;
    let pricewithDiscound = totalPrice - discount;
    console.log(`The final price is: ${pricewithDiscound} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardCleaning([150]);