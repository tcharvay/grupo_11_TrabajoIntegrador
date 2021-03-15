
const db = require('../dataBase/models');
module.exports = function(req,res,next){
     
    if(typeof req.session.usuarioLogueado =="undefined"){
        res.send("logueate");
    }else{
        let permisos = res.locals.usuarioLogueado.admin;
        if(permisos=="1"){
            next()  
        }else{
         res.send("Debe loguearse nuevamente para tener esos permisos")  
    }; 
       
    }
}
