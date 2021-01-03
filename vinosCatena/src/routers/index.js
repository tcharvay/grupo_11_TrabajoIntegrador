const express = require('express');
const router = express.Router();

const generalController = require('../controllers/generalControllers')

router.get('/', generalController.home);


module.exports = router;
