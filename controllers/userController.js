const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

//@desc Register user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandotory");
  }

  const userAvailable = await User.findOne({ email });
  console.log(userAvailable);
  if (userAvailable) {
    res.status(400);
    throw new Error("Email already registered");
  }

  //Hash passsword
  const hasedPassword = await bcrypt.hash(password, 10);
  console.log("hased ", hasedPassword);

  const user = await User.create({ username, email, password: hasedPassword });
  console.log(`User created ${user}`)
  if (user) {
    res.status(200).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data not valid");
  }
  res.json({ message: "Register user" });
});

//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "User login" });
});

//@desc current user info
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = { registerUser, loginUser, currentUser };
