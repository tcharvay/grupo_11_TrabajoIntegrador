const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
var usuarios = fs.readFileSync(path.join(__dirname,'../data/usuarios.json'), 'utf8');
var usuarios=JSON.parse(usuarios);
const db = require('../dataBase/models');
module.exports = function(req,res,next){
    //console.log(req.session.usuarioLogueado)
    if(typeof req.session.usuarioLogueado =="undefined"){
        res.send("logueate");
    }else{
        let permisos = res.locals.usuarioLogueado.admin;
        if(permisos=="true"){
            next()  
        }else{
         res.send("no tienes estos permisos")  
    }; 
       
    }
}
