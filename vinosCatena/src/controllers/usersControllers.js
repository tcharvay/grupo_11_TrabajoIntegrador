const fs = require('fs');
const path = require('path');
const db = require('../dataBase/models')
const bcrypt= require ('bcrypt');
let{ckeck,validationResult,body, check}= require('express-validator');
const session = require('express-session');


module.exports ={
  login: function(req, res) {
        res.render('login') 
    },
  
  logueado: function(req,res){
       db.Usuarios.findOne({where:{email: req.body.email}})
          .then((usuario)=>{
            if(bcrypt.compareSync(req.body.pasword, usuario.pasword)){
                req.session.usuarioLogueado = {
                  id: usuario.id,
                  nombre: usuario.nombre,
                  admin: usuario.administrador,
                  avatar : usuario.avatar
                  }
                  //return res.send(req.session)
                  res.redirect ('/');
          }else {return  res.redirect('login');}
          })},

  register: function(req, res) {
        res.render('register')         
    },
  
  crear: function (req, res) {
   // return res.send (req.files);
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
              avatar : req.files[0].filename,
              administrador : 0,
              pasword : bcrypt.hashSync(req.body.pasword,12),
                }).then(function(user){
                  res.redirect("login")
                })
            } 
       else {
        return res.render("register", { errors: errors.mapped(), old: req.body })
      }
      
  },
  profile: (req, res)=>{
    db.Usuarios.findByPk(req.params.id)
    .then(usuario=>{ 
      //return res.send(usuario)
       return res.render ('perfil', {usuario :usuario});
    })
  }  
 }
    
    

