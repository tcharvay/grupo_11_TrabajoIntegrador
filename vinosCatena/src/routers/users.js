const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const bcrypt=require ('bcrypt');
let{ckeck,validationResult,body, check}= require('express-validator');


const usersControllers = require ('../controllers/usersControllers')

router.get('/login', usersControllers.login);
router.post('/login', usersControllers.login);

router.get('/register', usersControllers.register);
router.post('/register',[
    check('apellido').isLength({min:1}).withMessage('El apellido es un campo obligatorio'),
    check('nombre').isLength({min:1}).withMessage("El nombre es un campo obligatorio"),
    check('email').isEmail().withMessage("ingrese Email valido"),
    check('password').isInt({min:0}).withMessage("Contraseña solo de caracteres numericos").isLength({min:6}).withMessage("Contraseña minimo 6 caracteres"),
    body('email').custom(function(value){
      var usuarios = fs.readFileSync(path.join(__dirname,'../data/usuarios.json'), 'utf8');
      var usuarios=JSON.parse(usuarios);
      for (let i = 0 ; i <usuarios.length; i ++){
        if (usuarios[i].email == value){
          return false ;
        }
       }  return true
            
    }).withMessage('Email ya registrado')
  ],usersControllers.create);




module.exports = router;
