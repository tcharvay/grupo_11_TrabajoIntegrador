module.exports = function(req,res,next){
    if(typeof req.session.usuarioLogueado!="undefined"){
        res.render('index')
    }else{
    next()
    }
}