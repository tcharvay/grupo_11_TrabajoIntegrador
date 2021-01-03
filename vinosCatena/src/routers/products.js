const express = require('express');
const router = express.Router();

const productsControllers = require('../controllers/productsControllers')

router.get('/', productsControllers.listaProductos);
router.get('/detProducto', productsControllers.detProducto);

module.exports = router;