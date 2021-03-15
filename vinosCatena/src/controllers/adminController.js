const fs = require('fs');
const path = require('path');
const db = require('../dataBase/models')
const bcrypt= require ('bcrypt');
let{ckeck,validationResult,body, check}= require('express-validator');
module.exports = {
  Admin: function(req, res) {
    res.render('products')         
},
    registerAdmin: function(req, res) {
        res.render('registerAdmin')         
    },
  crearAdmin : function (req, res) {
    db.Usuarios.findOne({ where: { email : req.body.email } })
    .then(function(val){
      if(val !=null){
        res.render('register', {
          errors:
              {msg: "Email ya registrado"},
          })
      }
    })
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      db.Usuarios.create({
          apellido :req.body.apellido,
          nombre : req.body.nombre,    
          email : req.body.email,
          pasword : bcrypt.hashSync(req.body.pasword,12),
          administrador :req.body.select,
            }).then(function(users){
                res.render("products")
            })
        } else {
            return res.render("register", { errors: errors.mapped(), old: req.body })
        }
    
}, 
}