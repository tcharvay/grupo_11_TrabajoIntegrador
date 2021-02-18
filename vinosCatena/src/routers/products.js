const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require ('path');
const metodhOverride = require ('method-override');

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
router.get('/products',productsController.listaProductos)
router.get('/:id', productsController.detProducto);
router.get('/new', productsController.new);
router.post('/new', upload.any(), productsController.create)

router.get('/detail/:id', productsController.detail);
router.put ('/edit/:id', productsController.edit);
router.delete('/delete/:id', productsController.delete);

module.exports = router;
