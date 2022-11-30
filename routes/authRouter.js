import express from "express";

import { login, getDashboard } from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.get("/dashboard", authMiddleware, getDashboard);

export default authRouter;
