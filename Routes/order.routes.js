const express = require("express");
const { isAuthenticated, isAdmin } = require("../config");
const is_Admin = require("../config/isAdmin.config");
const {
  createOrder,
  getOrderById,
  updateOrderById,
  deleteOrderById,
  paynow,
  getAllOrder,
} = require("../controller/Order.controller");

const router = express.Router();

router.post("/createorder", isAuthenticated, createOrder);
router.post("/getallorder", isAuthenticated, getAllOrder);
router.post("/paynow", isAuthenticated, paynow);
router.get("/:oid", isAuthenticated, getOrderById);
router.patch("/:oid", isAuthenticated, updateOrderById);
router.delete("/:oid", isAuthenticated, deleteOrderById);

module.exports = router;
