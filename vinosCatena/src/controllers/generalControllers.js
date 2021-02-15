const fs = require('fs');
const path = require('path');


module.exports ={
    home: function(req, res, next) {
        let productos = fs.readFileSync(path.join(__dirname,'../data/productos.json'), 'utf8');
        productos =JSON.parse (productos);
        
        res.render('index',{productos: productos})
        
    },
    empresa: function(req, res, next) {
        res.render('empresa') 
    },
    ubicacion: function(req, res, next) {
        res.render('ubicacion') 
    },
    contacto: function(req, res, next) {
        res.render('contacto') 
    },
    productos: function(req, res, next) {
        res.render('listaProductos') 
    }
}