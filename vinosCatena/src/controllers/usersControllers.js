const fs = require('fs');
const path = require('path');
const db = require('../dataBase/models')
const bcrypt= require ('bcrypt');
var usuarios = fs.readFileSync(path.join(__dirname,'../data/usuarios.json'), 'utf8');
var usuarios=JSON.parse(usuarios);
let{ckeck,validationResult,body, check}= require('express-validator');
const administrador = require('../middelwares/administrador');

module.exports ={
    login: function(req, res) {
        res.render('login') 
    },
    logueado: function(req, res) {            
         for (let i = 0; i < usuarios.length; i++) {
             //console.log(usuarios[i].email)
            if(usuarios[i].email == req.body.email) {                
                if(bcrypt.compareSync(req.body.pasword, usuarios[i].pasword) == true){
                    req.session.usuarioLogueado={
                      email:usuarios[i].email,
                      administrador : usuarios[i].administrador,  
                    }                                      
                     return  res.redirect('/');
                        
                 }                             
          }    
        }return  res.render('login') 
    },
    register: function(req, res) {
        res.render('register') 
        
    },
    crear :  function(req, res){
      let errors = validationResult(req);
       if (errors.isEmpty()){ 
         db.Usuarios.create({
         apellido :req.body.apellido,
         nombre : req.body.nombre,    
         email : req.body.email,
         pasword : bcrypt.hashSync(req.body.pasword,12),
         administrador :req.body.select
      })
       .then(function(){
          res.redirect('login')
      })
    }else {
      res.render('register', {
          errors: errors.mapped(),
          old: req.body
  })
}
      },
  }
    
    /* function(req,res){
        let errors = validationResult(req);
     if(locals.usuarioLogueado.administrador="true"){
        if (errors.isEmpty()){
            usuarios.push({
              apellido :req.body.apellido,
              nombre : req.body.nombre,    
              email : req.body.email,
              pasword : bcrypt.hashSync(req.body.pasword,12),
              administrador :req.body.select
               })
             fs.writeFileSync(path.join(__dirname,'../data/usuarios.json'),JSON.stringify(usuarios));
              res.render('index')
          }else {
             res.render('register', {
                 errors: errors.mapped(),
                 old: req.body
         })
       }
     }else{
        
     if (errors.isEmpty()){
                usuarios.push({
         apellido :req.body.apellido,
         nombre : req.body.nombre,    
         email : req.body.email,
         pasword : bcrypt.hashSync(req.body.pasword,12),
         
          })
        fs.writeFileSync(path.join(__dirname,'../data/usuarios.json'),JSON.stringify(usuarios));
         res.render('login')
     }else {
		res.render('register', {
		    errors: errors.mapped(),
			old: req.body
    })
  }
 } 
}, */



