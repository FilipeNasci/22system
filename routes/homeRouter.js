const express = require('express');
const router = express.Router();
const controller = require('../controllers/homeController');

router.use('/add',  express.urlencoded({extended: true}), controller.registerClothes);

router.post('/del', express.urlencoded({extended: true}), controller.deleteClothe);

router.use('/', controller.listClothes);


module.exports =  router;