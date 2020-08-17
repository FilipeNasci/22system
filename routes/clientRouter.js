const express = require('express');
const router = express.Router();
const controller = require('../controllers/clientController');

router.get('/cadastrarCliente', (req, res) => res.render('cadastroCliente'));

router.post('/add',  express.urlencoded({extended: true}), controller.registerClient);


module.exports =  router;