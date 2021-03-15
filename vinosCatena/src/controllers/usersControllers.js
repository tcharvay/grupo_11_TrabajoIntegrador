const fs = require('fs');
const path = require('path');
const db = require('../dataBase/models')
const bcrypt= require ('bcrypt');
let{ckeck,validationResult,body, check}= require('express-validator');


module.exports ={
    login: function(req, res) {
        res.render('login') 
    },
  logueado: function(req,res){
        db.Usuarios.findOne ({where:{email: req.body.email} })
          .then(function(val){
            if(bcrypt.compareSync(req.body.pasword, val.pasword)){
               req.session.usuarioLogueado = {
                nombre:  val.nombre,
                admin: val.administrador
               }
               return res.redirect('/')
            }else {
                return  res.render('login'); 
            };
          })
  },
  register: function(req, res) {
        res.render('register')         
    },
    crear: function (req, res) {
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
              }).then(function(users){
                  res.redirect("login")
              })
          } else {
              return res.render("register", { errors: errors.mapped(), old: req.body })
          }
      
  },
  
 }
    
    

