const express = require('express');
const app = express();
const path = require('path');

const indexRouter = require('./routers/index');
const productsRouter = require('./routers/products');
const usersRouter = require('./routers/users');
const carritoRouter = require ('./routers/carrito')
const newProductRouter = require ('./routers/newProduct')
const editProductRouter = require ('./routers/editProduct')


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products',productsRouter);
app.use('/carrito',carritoRouter);
app.use('/newProduct',newProductRouter);
app.use('/editProduct',editProductRouter);


app.listen (5000, function(req, res){
    console.log("conectado en puerto 5000");
})