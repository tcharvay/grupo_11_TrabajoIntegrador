const express = require('express');
const router = express.Router();
let{ckeck,validationResult,body, check}= require('express-validator');

const usersControllers = require ('../controllers/usersControllers')

router.get('/login', usersControllers.login);
router.get('/register', usersControllers.register);
router.post('/register',[
    check('apellido').isLength({min:1}).withMessage('El apellido es un campo obligatorio'),
    check('nombre').isLength({min:1}).withMessage("El nombre es un campo obligatorio"),
    check('email').isEmail().withMessage("ingrese Email valido"),
    check('password').isInt({min:0}).withMessage("Contraseña minimo 6 caracteres numericos").isLength({min:6}).withMessage("Contraseña minimo 6 caracteres numericos"),
  ],usersControllers.create);

module.exports = router;
