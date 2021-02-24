const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const validacion = require ("../middelwares/validacion")

const usersControllers = require ('../controllers/usersControllers')

router.get('/login', usersControllers.login);
router.post('/login', usersControllers.logueado);
router.get('/register', usersControllers.register);
router.post('/register',validacion,usersControllers.create);

module.exports = router;
