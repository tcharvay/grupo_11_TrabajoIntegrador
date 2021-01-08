module.exports ={
    home: function(req, res, next) {
        res.render('index') 
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
        res.render('productos') 
    },
}