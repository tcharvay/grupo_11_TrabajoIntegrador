const fs = require('fs');
const path = require('path');


let{ckeck,validationResult,body, check}= require('express-validator');

module.exports ={
    new: (req, res)=>{
        res.redirect ('productNew');
    },

    create : (req,res)=>{
        let errors = validationResult(req);
        let products = fs.readFileSync(path.join(__dirname,'../data/productos.json'), 'utf8');
        products =JSON.parse (products);
        
        let newId = 0;
        if (products.length != 0){
        let ultimoRegistro = products.length-1;
        newId = products[ultimoRegistro].id
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
         return res.render('productNew',{errors:errors.errors})
     }
    
},

    detail: (req, res)=> {
        let products = fs.readFileSync(path.join(__dirname,'../data/productos.json'), 'utf8');
        products =JSON.parse (products);
            for (i=0; i<products.length ;i++){
                if (products[i].id == req.params.id) {
                   return res.render('productDetail', {products : products[i]});
                }
            }
    },

    edit:(req, res)=>{
        let products = fs.readFileSync(path.join(__dirname,'../data/productos.json'), 'utf8');
        products =JSON.parse (products);
            for (i=0; i<products.length ;i++){
                if (products[i].id == req.params.id) {
                   return res.render('productDetail', {products : products[i]});
                }
            }
    },

    update:(req, res)=>{
        res.send('editar producto');
    },
     
    delete: (req, res)=>{
        res.send("eliminar producto");
    },
    

    detProducto: (req, res)=> {
        let products = fs.readFileSync(path.join(__dirname,'../data/productos.json'), 'utf8');
        products =JSON.parse (products);
            for (i=0; i<products.length ;i++){
                if (products[i].id == req.params.id) {
                   return  res.render('detproducto', {products : products[i]});
                }
            }
     },
   
    listaProductos: (req,res)=>{
        let products = fs.readFileSync(path.join(__dirname,'../data/productos.json'), 'utf8');
        products =JSON.parse (products);
        res.render ('products',{products: products});
    },
    
}