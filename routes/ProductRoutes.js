const express = require('express');
const ProductController = require('../controllers/ProductController');

//This Way is destructured, we can also do it.
const router = express.Router(); //MiddleWare router

router
.route('/')
.get(ProductController.getAllProduct)
.post(ProductController.createProduct)


module.exports = router;