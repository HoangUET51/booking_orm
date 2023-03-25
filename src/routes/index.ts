import express from "express";
import userRouter from './user.route'
const router = express();

router.get("/home", (req, res) => res.send("Hello World"));

router.use('/user',userRouter)

export default router;
