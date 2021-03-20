const express = require('express');
const router = express.Router();
const validacion = require ("../middelwares/validacion");

const usersControllers = require ('../controllers/usersControllers')


const multer = require('multer');
const path = require ('path');
const metodhOverride = require ('method-override');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../../public/images/upload'))
    },
    filename: function (req, file, cb) {
      cb(null, 'avt-'+file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })



router.get('/login', usersControllers.login);
router.post('/login', usersControllers.logueado);
router.get('/register', usersControllers.register);
//router.post('/register',validacion, upload.any(), usersControllers.crear);
router.post('/register', upload.any(), usersControllers.crear);
router.get('/profile/:id', usersControllers.profile);


module.exports = router;
