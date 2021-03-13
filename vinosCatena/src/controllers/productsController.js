const db = require ('../dataBase/models');
let{ckeck,validationResult,body, check}= require('express-validator');

module.exports ={

   newProduct:(req, res)=>{
        db.Cepa.findAll()
        .then ((cepas)=>{
            res.render ('productNew', {cepas:cepas});
         })
        },

   createProduct : (req,res)=>{
        db.Image.create({
        path: req.files[0].filename
       }).then ((data)=>{
        db.Product.create({
        name :req.body.nombre,
        description : req.body.descripcion,    
        id_cepa : req.body.cepa,
        price : req.body.precio,
        id_img: data.id
           })
       }).then (()=>{
        res.redirect ('/products');
       })
       
    
    },

  edit:(req, res)=>{
       let products = db.Product.findByPk(req.params.id, {include :[{association: "cepas"},{association: "image"}]})
   
        let listaCepas =db.Cepa.findAll();
        Promise.all ([products, listaCepas])
            .then (([products, listaCepas])=>{
                res.render('productEdit',{products: products, listaCepas: listaCepas});
            })
    },

   update:(req, res)=>{
        db.Product.update({
            name :req.body.nombre,
            description : req.body.descripcion,    
            id_cepa : req.body.cepa,
            price : req.body.precio,
            }, {
                where : {id : req.params.id}
            }).then (()=>{
                return res.redirect ('/products');
            })
            
        },

   delete: (req, res)=>{
       db.Product.destroy ({
           where: {id: req.params.id}
       })
       return res.redirect ('/products');
   },
   

   detProducto: (req, res)=> {
    db.Product.findByPk(req.params.id, {include :[{association: "cepas"},{association: "image"}]
    })
    .then((products)=>{
        res.render('detProducto',{products: products});
    })
    },
  
   listaProductos: (req, res)=>{
        db.Product.findAll({ include : [{association : "cepas"},{association: "image"}]
        })
                .then((products)=>{
                res.render('products',{products: products});
            })
    },
}





/*
//Esto es con JSON
const fs = require('fs');
const path = require('path');

let{ckeck,validationResult,body, check}= require('express-validator');

module.exports ={
    
    new: (req, res)=>{
         res.render ('productNew');
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

        //let products = fs.readFileSync(path.join(__dirname,'../data/productos.json'), 'utf8');
        let products = 
        products =JSON.parse (products);
        res.render ('products',{products: products});
    },
    
}
*/