// var amount = 3200;

// if (amount >= 5000) {
//     console.log(`20% discount applied`);
// }else if (amount >= 3000 && amount <= 4999) {
//     console.log(`10% discount applied`);
// }else if (amount >= 1000 && amount <= 2999) {
//     console.log(`5% discount applied`);
// }else if (amount >= 0 && amount <= 1000) {
//     console.log(`No discount applied`);
// }else {
//   console.log("Invalid amount...");
// }
var amount = 3200;
var discount;
var finalPrice;

if (amount >= 5000) {
  discount = 20;
}else if (amount >= 3000 && amount <= 4999) {
  discount = 10;
}else if (amount >= 1000 && amount <= 2999) {
  discount = 5;
}else if (amount >= 0 && amount < 1000) {
  discount = 0;
} else {
  console.log("Invalid amount...");
}

if(discount !== undefined){
    finalPrice = amount - ( amount * discount)/100;
    console.log(`Amount : ${amount} BDT`);
    console.log(`${discount}% discount applied`);
    console.log(`Final price after discount : ${finalPrice} BDT`);
}

