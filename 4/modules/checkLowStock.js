const inventory = require('../data/inventory');

function checkLowStock() {
  const low = inventory.filter(item => item.quantity < 5);
  console.log("\n Low Stock Items:");
  if (low.length === 0) {
    console.log("All items have sufficient stock.");
    return;
  }
  low.forEach(item => {
    console.log(`- ${item.name}: ${item.quantity} pcs`);
  });
}

module.exports = checkLowStock;
