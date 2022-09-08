import { Router } from "express";

import { signupUser, signinUser, signoutUser } from "../controllers/auth.js";

const router = Router();

router.get("/signup", signupUser);
router.get("/signin", signinUser);
router.get("/signout", signoutUser);

export default router;
