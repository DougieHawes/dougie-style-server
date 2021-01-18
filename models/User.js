const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  dateJoined: { type: Date, default: Date.now() },
  status: { type: String, default: "user" },
});

module.exports = mongoose.model("User", UserModel);
