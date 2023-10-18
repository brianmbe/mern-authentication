import express from "express";
import { userAPI } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/", userAPI);

export default userRouter;
