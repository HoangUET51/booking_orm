import express from "express";
import userRouter from "./user.route";
const router = express();

router.use("/user", userRouter);

export default router;
