const express = require('express');
const router = express.Router();

const editProductController = require('../controllers/editProductController');

router.get ('/' , editProductController.editProduct)

module.exports = router;

