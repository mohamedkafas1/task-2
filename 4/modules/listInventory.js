const inventory = require('../data/inventory');

function listInventory() {
  console.log("\n Current Inventory:");
  if (inventory.length === 0) {
    console.log("No items in inventory.");
    return;
  }
  inventory.forEach(item => {
    console.log(`- ${item.name}: ${item.quantity} pcs`);
  });
}

module.exports = listInventory;
