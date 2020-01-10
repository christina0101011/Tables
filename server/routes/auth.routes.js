const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/auth.ctrl')

router.post('/signup', ctrlUser.signup)

router.post('/signin', ctrlUser.signin)

module.exports = router;