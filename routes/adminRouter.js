const express = require('express');
const router = express.Router();
const controller = require('../controllers/adminController');

router.get('/', (req, res)=> res.render('admin'));

router.post('/addPayment', express.urlencoded({extended: true}), controller.registerPayments);


module.exports =  router;