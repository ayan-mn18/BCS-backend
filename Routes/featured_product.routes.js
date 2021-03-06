const express = require("express");
const { isAuthenticated, isAdmin } = require("../configf");
const is_Admin = require("../configf/isAdmin.config");
const {
  addFeaturedProduct,
  getFeaturedProductById,
  updateFeaturedProductById,
  deleteFeaturedProductById,
  changeStockSettings,
} = require("../controllerf/featured_product.controller");
const { upload } = require("../utilf/multer");

const router = express.Router();

router.get("/:fpid/outofstock" , isAuthenticated , isAdmin , changeStockSettings );
router.post(
  "/:pid",
  isAuthenticated,
  isAdmin,
  upload.array("url"),
  addFeaturedProduct
);
router.get("/:pid/:fpid", getFeaturedProductById);
router.patch(
  "/:pid/:fpid",
  isAuthenticated,
  isAdmin,
  upload.array("url"),
  updateFeaturedProductById
);
router.delete(
  "/:pid/:fpid",
  isAuthenticated,
  isAdmin,
  upload.array("url"),
  deleteFeaturedProductById
);


module.exports = router;
