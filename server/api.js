const express = require('express');

const ctrlShoppingList = require('./shopping-list-ctrl');

const router = express.Router();

// Get data for ShoppingList table
router.get('/api/shoppinglist', ctrlShoppingList.getShoppingList);

// Add new record
router.post('/api/record', ctrlShoppingList.postShoppingList);

// Delete record
router.delete('/api/record/:id', ctrlShoppingList.deleteShoppingList);

// Update record
router.put('/api/record/:id', ctrlShoppingList.updateShoppingList);

module.exports = router;