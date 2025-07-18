const inventory = require('../data/inventory');

function addItem(id, name, quantity) {
  inventory.push({ id, name, quantity });
  console.log(` Added: ${name} (${quantity} pcs)`);
}

module.exports = addItem;
