const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
var usuarios = fs.readFileSync(path.join(__dirname,'../data/usuarios.json'), 'utf8');
var usuarios=JSON.parse(usuarios);
module.exports = function(req,res,next){
    //console.log(req.session.usuarioLogueado)
    if(typeof req.session.usuarioLogueado =="undefined"){
        res.send("logueate")
    }else{
    for (let i = 0; i < usuarios.length; i++) {
        if(req.session.usuarioLogueado.email==usuarios[i].email){
            if(usuarios[i].administrador=="1"){
                next()  
            }else{
                //window.alert("no tienes esos permisos");
                res.send("no tienes estos permisos");
            }
        }
    }
   
} 

}
