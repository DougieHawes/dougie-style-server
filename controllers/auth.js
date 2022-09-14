import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

export const signupUser = async (req, res) => {
  res.json({ msg: "signup user" });
};

export const signinUser = (req, res) => {
  res.json({ msg: "signin user" });
};
export const signoutUser = (req, res) => {
  res.json({ msg: "signout user" });
};
