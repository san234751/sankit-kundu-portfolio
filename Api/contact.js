const express = require("express");
const mongoose = require("mongoose");
const User = require("../DB/contact");
const route = express.Router();
route.post("/contact", async (req, res) => {
  const { email, message } = req.body;
  let user = {};
  user.email = email;
  user.message = message;
  let userModel = new User(user);
  await userModel.save();
  res.json("your contact information has been sended successfully");
});
module.exports = route;
