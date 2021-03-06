const express = require("express");
const { isAuthenticated, isAdmin } = require("../configf");
const is_Admin = require("../configf/isAdmin.config");
const {
  getAllCarts,
  getCart,
  createCart,
  addProductToCart,
  deleteProductFromCart,
} = require("../controllerf/cart.controller");
const { upload } = require("../utilf/multer");

const router = express.Router();

router.post("/create", isAuthenticated, createCart);
router.get("/getallcart", isAuthenticated, is_Admin, getAllCarts);
router.get("/getcart", isAuthenticated, getCart);
router.patch("/:pid/:fpid/add", isAuthenticated, addProductToCart);
router.patch("/:pid/:fpid/remove", isAuthenticated, deleteProductFromCart);

module.exports = router;
