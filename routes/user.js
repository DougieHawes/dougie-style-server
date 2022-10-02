import { Router } from "express";

import {
  createUser,
  loginUser,
  readUsers,
  readUser,
  updateUser,
  deleteUser,
} from "../controllers/user.js";

const router = Router();

router.post("/create", createUser);
router.post("/login", loginUser);
router.get("/read/all", readUsers);
router.get("/read/:id", readUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export default router;
