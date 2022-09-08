import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

export const signupUser = async (req, res) => {
  const { email } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) res.status(400).json({ msg: "invalid credentials" });

    if (!email) res.status(400).json({ msg: "please enter a valid email" });

    res.status(200).json({ msg: "signup user" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const signinUser = (req, res) => {
  res.json({ msg: "signin user" });
};
export const signoutUser = (req, res) => {
  res.json({ msg: "signout user" });
};
