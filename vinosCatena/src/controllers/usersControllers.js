const fs = require('fs');
const path = require('path');
const bcrypt= require ('bcrypt');
var usuarios = fs.readFileSync(path.join(__dirname,'../data/usuarios.json'), 'utf8');
var usuarios=JSON.parse(usuarios);
let{ckeck,validationResult,body, check}= require('express-validator');

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
                      email:usuarios[i].email  
                    }                                      
                     return  res.redirect('/');
                        
                 }                             
          }    
        }return  res.render('login') 
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
         pasword : bcrypt.hashSync(req.body.pasword,12)
        })
        fs.writeFileSync(path.join(__dirname,'../data/usuarios.json'),JSON.stringify(usuarios));
         res.render('login')
     }else {
		res.render('register', {
		    errors: errors.mapped(),
			old: req.body
    })
}
    
},
}


