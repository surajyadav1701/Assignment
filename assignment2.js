let billAmount = Number("100");
let tipPercentage = Number("15");

let calculatedTip = (tipPercentage / 100) * billAmount;
let totalAmount = billAmount + calculatedTip;

console.log(`Subtotal: $${billAmount}`);
console.log(`Tip Percentage: ${tipPercentage}%`);
console.log(`Calculated Tip: $${calculatedTip}`);
console.log(`Total Amount to Pay: $${totalAmount}`);
