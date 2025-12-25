var amnt = 3200;

if (amnt >= 5000) {
    console.log(`20% discount applied`);
}else if (amnt >= 3000 && amnt <= 4999) {
    console.log(`10% discount applied`);
}else if (amnt >= 1000 && amnt <= 2999) {
    console.log(`5% discount applied`);
}else if (amnt < 1000) {
    console.log(`No discount applied`);
}