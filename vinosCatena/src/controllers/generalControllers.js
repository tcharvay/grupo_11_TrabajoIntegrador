const db = require("../dataBase/models");

module.exports ={
    home: (req, res)=>{
        db.Product.findAll({
            include : [{association : "cepas"}, {association: "image"}]
        })
            .then((products)=>{
                res.render('index',{products: products});
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