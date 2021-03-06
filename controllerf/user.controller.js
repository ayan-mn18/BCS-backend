const bcrypt = require("bcrypt");

const { User, Cart } = require("../models");
const {
  errorMessage,
  successMessage,
} = require("../utilf/responseSender.utils");

const allUser = async (req, res) => {
  try {
    console.log(req.user.id);
    const userr = await User.find()
      .populate("previous_orders")
      .populate("cart_items");

    successMessage(res, "Here are all the users", userr);
  } catch (error) {
    errorMessage(res, "message", error);
  }
};

const updateUser = async (req, res) => {
  try {
    const updates = req.body;
    if (updates.password) {
      updates.password = await bcrypt.hash(req.body.password, 10);
    }
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: updates },
      { new: true }
    );
    successMessage(res, "Messgae", user);
  } catch (error) {
    errorMessage(res, "message", error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.uid;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return errorMessage(res, "user does not exist please check id", error);
    }
    successMessage(res, "User deleted Successfully", user);
  } catch (error) {
    errorMessage(res, "user does not exist please check id", error);
  }
};

const getUser = async (req, res) => {
  try {
    successMessage(res, "user details found successfully", (data = req.user));
  } catch (error) {
    errorMessage(res, "ERROR USER DETAILS NT FOUND ", error);
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.uid;
    const user = await User.findById(id);
    if (!user) {
      return errorMessage(res, "user does not exist please check id", error);
    }
    successMessage(res, "User deleted Successfully", user);
  } catch (error) {
    errorMessage(res, "ERROR USER DETAILS NT FOUND ", error);
  }
};

module.exports = {
  deleteUser,
  allUser,
  updateUser,
  getUser,
  getUserById,
};
