import { Router } from "express";
import { loginUser, logoutUser } from "../controllers/user.controller.js";

const router = Router();

// auth/login
router.get('/login', loginUser);
router.get('/logout', logoutUser);

export default router;
