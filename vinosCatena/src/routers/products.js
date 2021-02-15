const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require ('path');

const productsController = require('../controllers/productsController')


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../../public/images/upload'))
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })


router.get('/', productsController.listaProductos);

router.get('/detProducto', productsController.detProducto);

router.get('/productsNew', productsController.newProduct);
router.post('/productsNew', upload.any(), productsController.create)

router.get('/productsEdit', productsController.editProduct);

router.get('/:cepa', productsController.listaProductos)

module.exports = router;