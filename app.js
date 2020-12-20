const express = require ('express');
const app = express();
const fs = require('fs')
const path = require("path")
app.use (express.json ()); 
app.use (express.static ("express"));
app.get ('/', function (req, res) { 
    res.sendFile (path.join (__dirname,'views/index.html'));
})

app.listen(3002, function(){
    console.log('servidor corriendo  en el puerto 3000')
    console.log('http://localhost:3002')

})  