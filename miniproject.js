let inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

function getCategory(price) {
  if (price >= 500) {
    return "Premium";
  } else if (price >= 100) {
    return "Standard";
  } else {
    return "Budget";
  }
}

const calculateTotal = (items) => {
  let total = 0;
  items.forEach(item => {
    total += item.price;
  });
  return total;
};

console.log("--- Initializing Inventory System ---");

let newProductName = "Monitor";
let newProductPrice = Number("150");

console.log(`[Prompt executed: User adds "${newProductName}" at "$${newProductPrice}"]`);

inventory.push({ name: newProductName, price: newProductPrice });

console.log("");
console.log("--- Processing Inventory Roster (forEach) ---");

inventory.forEach(item => {
  let category = getCategory(item.price);
  console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${category}`);
});

console.log("");
console.log("--- Financial Analytics ---");

let totalValue = calculateTotal(inventory);
console.log(`Total Inventory Value: $${totalValue}`);

let affordable = inventory.filter(item => item.price < 200).map(item => item.name);
console.log(`Filtered Affordable Items (Under $200): ${JSON.stringify(affordable)}`);

let reportList = inventory.map(item => `${item.name.toUpperCase()}: $${item.price}`);
console.log(`Formatted Report List: ${JSON.stringify(reportList)}`);
