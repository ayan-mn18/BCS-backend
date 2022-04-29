const express = require('express');
const { isAuthenticated, isAdmin } = require('../Config');
const is_Admin = require('../Config/isAdmin.config');
const { addFeaturedProduct, getFeaturedProductById, updateFeaturedProductById, deleteFeaturedProductById } = require('../Controller/featured_product.controller');
const { upload } = require('../Utils/multer');

const router = express.Router();

router.post('/:pid' , isAuthenticated , isAdmin , upload.array('url') , addFeaturedProduct );
router.get('/:pid/:fpid' , isAuthenticated , isAdmin , getFeaturedProductById );
router.patch('/:pid/:fpid',isAuthenticated,isAdmin,upload.array('url'),updateFeaturedProductById);
router.delete('/:pid/:fpid',isAuthenticated,isAdmin,upload.array('url'),deleteFeaturedProductById);


module.exports = router;

