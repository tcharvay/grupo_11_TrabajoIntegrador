var express = require('express');
var router = express.Router();
const path = require ('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join (__dirname + '../views/listaProd.html'));
  //res.render('index', { title: 'Express' });
});

router.get('/detProducto', function(req, res, next) {
  res.sendFile(path.join (__dirname + '../../views/detProducto.html'));
});


module.exports = router;
