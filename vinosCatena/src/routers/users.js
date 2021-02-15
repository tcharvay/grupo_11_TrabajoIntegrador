const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const bcrypt=require ('bcrypt');
let{ckeck,validationResult,body, check}= require('express-validator');


const usersControllers = require ('../controllers/usersControllers')

router.get('/login', usersControllers.login);
router.post('/login', usersControllers.login);
<<<<<<< HEAD

=======
>>>>>>> 17d01300954e9feeca0cff282f8901512591eb4f
router.get('/register', usersControllers.register);
router.post('/register',[
    check('apellido').isLength({min:1}).withMessage('El apellido es un campo obligatorio'),
    check('nombre').isLength({min:1}).withMessage("El nombre es un campo obligatorio"),
    check('email').isEmail().withMessage("ingrese Email valido"),
<<<<<<< HEAD
    check('password').isInt({min:0}).withMessage("Contraseña solo de caracteres numericos").isLength({min:6}).withMessage("Contraseña minimo 6 caracteres"),
=======
    check('password').isInt({min:0}).withMessage("Contraseña minimo 6 caracteres numericos").isLength({min:6}).withMessage("Contraseña minimo 6 caracteres numericos"),
>>>>>>> 17d01300954e9feeca0cff282f8901512591eb4f
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
<<<<<<< HEAD



=======
>>>>>>> 17d01300954e9feeca0cff282f8901512591eb4f

module.exports = router;
