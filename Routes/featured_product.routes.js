const express = require('express');
const { isAuthenticated, isAdmin } = require('../Config');
const is_Admin = require('../Config/isAdmin.config');
const { addFeaturedProduct, getFeaturedProductById, updateFeaturedProductById, deleteFeaturedProductById } = require('../Controller/featured_product.controller');
const { upload } = require('../Utils/multer');

const router = express.Router();

router.post('/:pid' , isAuthenticated , isAdmin , addFeaturedProduct );
router.get('/:pid/:fpid' , isAuthenticated , isAdmin , getFeaturedProductById );
router.patch('/:pid/:fpid',isAuthenticated,isAdmin,updateFeaturedProductById);
router.delete('/:pid/:fpid',isAuthenticated,isAdmin,deleteFeaturedProductById);


module.exports = router;

