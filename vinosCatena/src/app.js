const express = require('express');
const app = express();
const path = require('path');
const metohodOverride = require ('method-override'); // para usar put y delete con _mehod como parametro en el Form


const indexRouter = require('./routers/index');
const productsRouter = require('./routers/products');
const usersRouter = require('./routers/users');
const cartRouter = require ('./routers/cart')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(metohodOverride('_method'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products',productsRouter);
app.use('/cart',cartRouter);


app.listen (5000, function(req, res){
    console.log("conectado en puerto 5000");
})