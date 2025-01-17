import { Router } from "express";
import { loginUser, logoutUser } from "../controllers/user.controller.js";

const router = Router();

// auth/login
router.post('/login', loginUser);
router.post('/logout', logoutUser);

export default router;
