const fs = require('fs');
const path = require('path');
const bcrypt=require ('bcrypt');
var usuarios = fs.readFileSync(path.join(__dirname,'../data/usuarios.json'), 'utf8');
var usuarios=JSON.parse(usuarios);
let{ckeck,validationResult,body, check}= require('express-validator');
<<<<<<< HEAD


=======
>>>>>>> 17d01300954e9feeca0cff282f8901512591eb4f
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
<<<<<<< HEAD
         password : bcrypt.hashSync(req.body.password,12)
=======
         pasword : bcrypt.hashSync(req.body.password,12)
>>>>>>> 17d01300954e9feeca0cff282f8901512591eb4f
        })
        fs.writeFileSync(path.join(__dirname,'../data/usuarios.json'),JSON.stringify(usuarios));
         res.render('login')
     }else {
         return res.render('register',{errors:errors.errors})
     }
<<<<<<< HEAD
    },
    
    checkUser :function (req, res){
        let datosLogin = req.body;
        for (let i =0; i<usuarios.length ;i++){
            if (usuarios[i].email == req.body.email){
                if (bcrypt.compareSync(req.body.password, usuarios[i].password)){
                    // ingreso el usuario
                }
            }
        }
    }
=======
    
},
>>>>>>> 17d01300954e9feeca0cff282f8901512591eb4f
}


