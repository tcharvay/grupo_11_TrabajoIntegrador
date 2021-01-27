const fs = require('fs');
const path = require('path');
const bcrypt=require ('bcrypt');
var usuarios = fs.readFileSync(path.join(__dirname,'../data/usuarios.json'), 'utf8');
var usuarios=JSON.parse(usuarios);
let{ckeck,validationResult,body, check}= require('express-validator');
module.exports ={
    login: function(req, res) {
        res.render('login') 
    },
    register: function(req, res) {
        res.render('register') 
    },
    create : function(req,res){
        let errors = validationResult(req);
        
     if (errors.isEmpty()){
         usuarios.push({
         apellido :req.body.apellido,
         nombre : req.body.nombre,    
         email : req.body.email,
         pasword : bcrypt.hashSync(req.body.password,12)
        })
        fs.writeFileSync(path.join(__dirname,'../data/usuarios.json'),JSON.stringify(usuarios));
         res.render('login')
     }else {
         return res.render('register',{errors:errors.errors})
     }
    
},
}


