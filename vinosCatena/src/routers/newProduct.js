const express = require('express');
const router = express.Router();

const newProductController = require('../controllers/newProductController');

router.get ('/' , newProductController.newProduct)

module.exports = router;

