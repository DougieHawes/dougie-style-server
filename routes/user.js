import { Router } from "express";

import {
  readUsers,
  readUser,
  updateUser,
  deleteUser,
} from "../controllers/user.js";

const router = Router();

router.get("/read/all", readUsers);
router.get("/read/:id", readUser);
router.get("/update/:id", updateUser);
router.get("/delete/:id", deleteUser);

export default router;
