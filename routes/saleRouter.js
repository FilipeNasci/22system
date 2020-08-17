const express = require('express');
const router = express.Router();
const controller = require('../controllers/saleController');
const { route } = require('./homeRouter');

router.use('/vender', express.urlencoded({extended: true}), controller.registerSale);

router.use('/listar', controller.listSales);

router.use('/:id',  express.urlencoded({extended: true}), controller.renderSale);


module.exports =  router;