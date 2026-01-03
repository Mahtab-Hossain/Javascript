// function to calculate surface area
function calculateArea(lenght, width){
    return lenght * width;
}
console.log(calculateArea(5, 10)); // Output: 50

//Tax Calculation Function
function calculateTax(amount){
    var tax = 0;
    if (amount > 10000) {
        tax = amount * 0.10; // 10% tax
    }else{
        tax = amount * 0.05; //5% tax
    }
    return tax;
}
console.log(calculateTax(15000)); // Output: 1500