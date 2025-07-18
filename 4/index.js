const addItem = require('./modules/addItem');
const deleteItem = require('./modules/deleteItem');
const listInventory = require('./modules/listInventory');
const checkLowStock = require('./modules/checkLowStock');

addItem(101, "Mouse", 5);
addItem(102, "Keyboard", 8;
addItem(103, "Monitor", 4);

listInventory();

deleteItem(102);

checkLowStock();
