const express = require('express');
const router = express.Router();

const generalController = require('../controllers/generalControllers')

router.get('/', generalController.home);
router.get('/logout', generalController.logout)
router.get('/empresa',generalController.empresa);
router.get('/ubicacion',generalController.ubicacion);
router.get('/contacto',generalController.contacto);

module.exports = router;
