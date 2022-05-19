const express = require("express");
const { isAuthenticated } = require("../config");
const is_Admin = require("../config/isAdmin.config");

const {
  deleteUser,
  allUser,
  updateUser,
  getUser,
} = require("../controller/user.controller");
const router = express.Router();

router.get("/alluser", isAuthenticated, is_Admin, allUser);
router.get("/fetchuser", isAuthenticated, getUser);
router.patch("/updateuser/:uid", isAuthenticated, is_Admin, updateUser);
router.delete("/deleteuser/:uid", isAuthenticated, is_Admin, deleteUser);

module.exports = router;
