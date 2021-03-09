const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require ('method-override');
const session = require('express-session')
const vistaUsuario = require ('./middelwares/vistaUsuario')
const indexRouter = require('./routers/index');
const productsRouter = require('./routers/products');
const usersRouter = require('./routers/users');
const cartRouter = require ('./routers/cart');
const permisos = require ('./middelwares/permisos')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({secret:'un mensaje'}));
app.use(vistaUsuario);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products',productsRouter);
app.use('/cart',cartRouter);


app.listen (5000, function(req, res){
    console.log("conectado en puerto 5000");
})