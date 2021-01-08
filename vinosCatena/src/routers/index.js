const express = require('express');
const router = express.Router();

const generalController = require('../controllers/generalControllers')

router.get('/', generalController.home);
router.get('/empresa',generalController.empresa)
router.get('/ubicacion',generalController.ubicacion)
router.get('/contacto',generalController.contacto)
router.get('/productos',generalController.productos)


module.exports = router;
