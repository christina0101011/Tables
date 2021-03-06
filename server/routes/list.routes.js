const express = require('express');

const ctrlShoppingList = require('../controllers/shopping-list.ctrl');
const checkPermitions = require('../middleware/check-permitions')

const router = express.Router();

// Get data for ShoppingList table
router.get('/shoppinglist', ctrlShoppingList.getShoppingList);

// Add new record
router.post('/record', ctrlShoppingList.postShoppingList);

// Delete record
router.delete('/record/:id', checkPermitions, ctrlShoppingList.deleteShoppingList);

// Update record
router.put('/record/:id', ctrlShoppingList.updateShoppingList);

module.exports = router;