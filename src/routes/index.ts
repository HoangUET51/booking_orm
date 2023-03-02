import express from "express";

const router = express();
router.get("/home", (req, res) => res.send("Hello World"));

export default router;
