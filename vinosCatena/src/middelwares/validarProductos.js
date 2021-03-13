const express = require('express');
const db = require('../dataBase/models');

let{ckeck,validationResult,body, check}= require('express-validator');
module.exports = [
  
    check('name').isLength({min:1}).withMessage('El nombre del vino es un campo obligatorio'),
    check('description').isLength({min:1}).withMessage("Debe incluir una descripcion del vino"),
    check('price').isLength({min:1}).withMessage("ingrese un importe"),
         
  ]