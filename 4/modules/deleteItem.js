const inventory = require('../data/inventory');

function deleteItem(id) {
  const index = inventory.findIndex(item => item.id === id);
  if (index !== -1) {
    const removed = inventory.splice(index, 1)[0];
    console.log(` Deleted: ${removed.name}`);
  } else {
    console.log(`Item not found.`);
  }
}

module.exports = deleteItem;
