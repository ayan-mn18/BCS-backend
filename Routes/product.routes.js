
const express = require('express');
const { isAuthenticated, isAdmin } = require('../Config');
const is_Admin = require('../Config/isAdmin.config');
const { getProduct, addProduct, getProductById, deleteProductById, updateProductById } = require("../Controller/product.controller");
const cloudinary=require('../Utils/cloudinary');
const { upload } = require('../Utils/multer');

const router = express.Router();


router.get('/getproduct',isAuthenticated,is_Admin,getProduct);
router.get('/:pid',isAuthenticated,getProductById);
router.post('/addproduct',isAuthenticated,is_Admin,addProduct);
router.delete('/:pid',isAuthenticated,is_Admin,deleteProductById);
router.patch('/:pid',isAuthenticated,is_Admin,upload.array('url'),updateProductById)





module.exports = router;

