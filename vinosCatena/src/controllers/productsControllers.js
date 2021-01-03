module.exports ={
    listaProductos: function(req,res){
        res.send ('Este es el listado de productos');
    },
    detProducto: function(req, res) {
            res.render('detProducto') 
    }
}