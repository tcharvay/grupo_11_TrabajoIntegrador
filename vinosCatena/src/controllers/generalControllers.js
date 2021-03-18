const db = require("../dataBase/models");

module.exports ={
    home: (req, res)=>{

    // ver
    let products = db.Product.findAll({include :[{association: "cepas"},{association: "image"}]})
    let listaCepas = db.Cepa.findAll();
        Promise.all ([products, listaCepas])
            .then (([products, listaCepas])=>{
                res.render('index',{products: products, listaCepas: listaCepas});
            })
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

    logout :function (req, res) {
        req.session.destroy();
        res.redirect("/users/login");
    },
}

/*
const fs = require('fs');
const path = require('path');


module.exports ={
    home: function(req, res, next) {
        let productos = fs.readFileSync(path.join(__dirname,'../data/productos.json'), 'utf8');
        productos =JSON.parse (productos);
        
        res.render('index',{productos: productos})
        
    },
}
*/