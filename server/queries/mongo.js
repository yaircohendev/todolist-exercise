const User = require("../models/User");
const EmailsMap = require("../models/emailsMap");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUserById = async (req, res) => {
  return res.json(res.user);
};

const createUser = async (req, res) => {
  const { email, firebaseUID } = req.body;
  const user = new User({ email });
  try {
    const results = await user.save();
    const userId = results._id;
    const map = new EmailsMap();
    await map.emails.set(firebaseUID, userId);
    return await map.save();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await res.user.set(req.body);
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await res.user.deleteOne();
    res.json({ message: "User has been deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
