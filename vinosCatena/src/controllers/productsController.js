const fs = require('fs');
const path = require('path');


let{ckeck,validationResult,body, check}= require('express-validator');

module.exports ={
    newProduct: (req, res)=>{
        res.render ('newProduct');
    },
    create : function(req,res){
        let errors = validationResult(req);
        let productos = fs.readFileSync(path.join(__dirname,'../data/productos.json'), 'utf8');
        productos =JSON.parse (productos);
        
        let newId = 0;
        if (productos.length != 0){
        let ultimoRegistro = productos.length-1;
        newId = productos[ultimoRegistro].id
        }
        
     if (errors.isEmpty()){
         productos.push({
         id : newId +1,
         nombre :req.body.nombre,
         descripcion : req.body.descripcion,    
         cepa : req.body.cepa,
         precio : req.body.precio,
         img: req.files[0].filename 
        })
        fs.writeFileSync(path.join(__dirname,'../data/productos.json'),JSON.stringify(productos));
        res.redirect ('/products');
     }else {
         return res.render('newProduct',{errors:errors.errors})
     }
    
},

    editProduct: function (req , res){
        res.render('editar Producto')
    },
    
    deleteProduct: (req, res)=>{
        res.send("eliminar producto");
    },
    
    detProducto: function(req, res) {
            res.render('detProducto');
    },
    
   
    listaProductos: function(req,res){
        let productos = fs.readFileSync(path.join(__dirname,'../data/productos.json'), 'utf8');
        productos =JSON.parse (productos);
        res.render ('listaProductos',{productos: productos});
    },
    
}