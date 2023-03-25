
import UserController from "@/controller/user.controller";
import express from "express"

const router = express.Router();

const {createOrEdit,getAllUser} = UserController;

router.post('/createOrEdit',createOrEdit);
router.get('/getAll',getAllUser);

export default router